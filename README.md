# 🧠 Google Review System — FastAPI + React



---

## 🚀 Project Overview

The Google Review System is a **Task Management / Survey Review Application** that allows users to:

- Create and manage surveys from a web interface  
- Store survey details in an SQLite database  
- Approve and review submitted surveys  
- Integrate frontend and backend using REST APIs  
- Generate a **Python SDK** automatically via OpenAPI

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React.js |
| Backend | FastAPI |
| Database | SQLite |
| SDK | OpenAPI Generator |
| Version Control | Git & GitHub |

---

## 🧩 Folder Structure

```
google-review-system/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── db.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── ...
│   └── sdk/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   └── ...
│
└── images/
    ├── Creating New Survey.png
    ├── Dashboard.png
    └── Review Survey page.png
```

---

## 🖼️ Screenshots

### 🧩 Creating a New Survey
![Creating New Survey](images/Creating%20New%20Survey.png)

### 📊 Dashboard View
![Dashboard](images/Dashboard.png)

### 🧾 Review Survey Page
![Review Survey Page](images/Review%20Survey%20page.png)

---

## 🧪 Setup & Run Instructions

### 🔹 Backend
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```
**Runs on →** http://127.0.0.1:8000  
Swagger UI → http://127.0.0.1:8000/docs

---

### 🔹 Frontend
```bash
cd frontend
npm install
npm start
```
**Runs on →** http://localhost:3000

---

### 🔹 SDK Generation
```bash
cd backend/sdk
npx @openapitools/openapi-generator-cli generate \
   -i http://127.0.0.1:8000/openapi.json \
   -g python -o ./openapi_client
```

To test SDK:
```bash
python test_sdk.py
```

---

## ✅ Features Implemented

✔️ FastAPI backend with SQLite  
✔️ React frontend integration  
✔️ Task approval flow  
✔️ OpenAPI SDK generation  
✔️ REST API documentation (Swagger)  
✔️ Fully responsive UI  

---

