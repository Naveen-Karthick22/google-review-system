from sqlmodel import SQLModel, create_engine, Session

# Database connection URL
DATABASE_URL = "sqlite:///./surveys.db"

# Create SQLModel engine
engine = create_engine(DATABASE_URL, echo=True)

def create_db_and_tables():
    """Creates database tables using SQLModel metadata"""
    from .models import Survey  # Import inside to avoid circular import
    SQLModel.metadata.create_all(engine)

def get_session():
    """Yields a SQLModel session"""
    with Session(engine) as session:
        yield session

