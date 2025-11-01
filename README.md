# 🌟 Google Review System – FastAPI + React

A full-stack project where users can **create and review Google-style survey forms**.  
Built using **FastAPI (Python)** for the backend and **React.js** for the frontend.  
This project demonstrates strong skills in API design, database handling, and UI development.

---

## 🚀 Features

✅ Create and save survey forms  
✅ View all created surveys  
✅ Approve or review submitted surveys  
✅ API endpoints tested with SDK generated using OpenAPI Generator  
✅ FastAPI backend with SQLite database  
✅ Fully interactive React frontend  

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React.js, JavaScript, HTML, CSS |
| **Backend** | FastAPI (Python) |
| **Database** | SQLite with SQLModel |
| **SDK Generation** | OpenAPI Generator |
| **Version Control** | Git & GitHub |

---

## ⚙️ Project Structure

```
google-review-system/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── db.py
│   │   ├── models.py
│   │   └── __init__.py
│   ├── sdk/
│   │   ├── openapi_client/
│   │   └── test_sdk.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   ├── package.json
│   └── public/
└── README.md
```

---

## ⚡ Getting Started

### 🖥️ Backend Setup (FastAPI)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate        # for Windows
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Your FastAPI server will run at:
```
http://127.0.0.1:8000
```

Swagger Docs available at:
```
http://127.0.0.1:8000/docs
```

---

### 💻 Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Your React app will run at:
```
http://localhost:3000
```

---

## 🔬 SDK Testing (OpenAPI Client)

```bash
cd backend/sdk
python test_sdk.py
```

Example Output:
```
✅ Survey created successfully!
📋 All Surveys:
 - Google Review Demo Survey | Status: Pending
🔄 Approving survey ID: 1 ...
✅ Survey approved successfully!
```

---

## 📸 Demo Screenshots (Optional)
_Add screenshots of your UI or Swagger Docs here._

---

## 🧠 Learning Outcomes

- Integrated **FastAPI with React frontend**
- Designed REST APIs and consumed them via **auto-generated SDK**
- Implemented **CORS middleware** for frontend-backend communication
- Practiced **Git workflow** and project structure organization

---

## 💼 Author

**👨‍💻 Naveen Karthick T K**  
B.E. Computer Science and Engineering | Sri Sai Ram Institute of Technology  
🔗 [LinkedIn](https://www.linkedin.com/) 🔗 [GitHub](https://github.com/Naveen-Karthick22)

---

⭐ _If you like this project, don’t forget to star the repository!_
