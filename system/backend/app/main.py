from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from pydantic import BaseModel
from .db import create_db_and_tables, get_session
from .models import Survey, StatusEnum

# -------------------------------
# App Setup
# -------------------------------
app = FastAPI(title="Google Forms Creation & Review System")

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# Database setup
# -------------------------------
create_db_and_tables()

# -------------------------------
# Pydantic model for request
# -------------------------------
class SurveyRequest(BaseModel):
    title: str
    questions_text: str


@app.get("/")
def read_root():
    return {"message": "FastAPI with SQLite is running successfully!"}


@app.post("/surveys/")
def create_survey(payload: SurveyRequest, session: Session = Depends(get_session)):
    survey = Survey(title=payload.title, questions_text=payload.questions_text)
    session.add(survey)
    session.commit()
    session.refresh(survey)
    return {"message": "Survey saved successfully!", "survey": survey}


@app.get("/surveys/")
def list_surveys(session: Session = Depends(get_session)):
    surveys = session.exec(select(Survey)).all()
    return surveys

@app.post("/surveys/{survey_id}/approve")
def approve_survey(survey_id: int, session: Session = Depends(get_session)):
    survey = session.get(Survey, survey_id)
    if not survey:
        raise HTTPException(status_code=404, detail="Survey not found")
    if survey.status != StatusEnum.pending:
        raise HTTPException(status_code=400, detail="Already approved")
    survey.status = StatusEnum.approved
    session.add(survey)
    session.commit()
    session.refresh(survey)
    return {"message": "Survey approved", "survey": survey}
