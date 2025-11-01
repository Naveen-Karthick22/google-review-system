This project is a Google Forms Creation & Review System, built using FastAPI for the backend
and React.js for the frontend. It allows users to create survey forms, review submissions, and
approve them through an intuitive interface. This project was developed as part of the Software
Development Coding Challenge.
■ Features
• Create and store surveys using FastAPI + SQLite
• View all submitted surveys dynamically
• Approve or reject surveys with real-time updates
• Backend connected to frontend via RESTful APIs
• SDK integration tested successfully
• Swagger UI for API documentation
• Modern, responsive React frontend
■ Tech Stack
Frontend: React.js, JavaScript
Backend: FastAPI
Database: SQLite
API Docs: Swagger / OpenAPI
SDK: OpenAPI Generator CLI
Version Control: Git & GitHub
■■ Backend Setup (FastAPI)
1■■ Navigate to backend
cd backend
2■■ Create and activate virtual environment
python -m venv .venv
.venv\Scripts\activate
3■■ Install dependencies
pip install -r requirements.txt
4■■ Run FastAPI server
python -m uvicorn app.main:app --reload
