from sqlmodel import SQLModel, Field
from enum import Enum

# Define possible statuses for surveys
class StatusEnum(str, Enum):
    pending = "Pending"
    approved = "Approved"

# Define the Survey table
class Survey(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    questions_text: str
    status: StatusEnum = Field(default=StatusEnum.pending)
