
# 📘 AI-Powered Student Assistant (MERN + AI Integration)

A production-ready MERN stack web application that allows users to input text, select a task mode, and receive structured AI-generated responses using an LLM API.

This project demonstrates:

- Clean React frontend development  
- Secure Express backend architecture  
- AI service integration  
- Structured prompt engineering  
- Professional GitHub-ready project structure  

---

## 🚀 Features

### 🔹 Explain a Concept
Breaks down complex topics into:
- Definition  
- Real-world example  
- Step-by-step explanation  
- Short summary  

### 🔹 Summarize Text
Returns:
- 5 structured bullet points  
- One concise paragraph summary  

### 🔹 Generate Quiz Questions
Generates:
- 5 multiple-choice questions  
- 4 options each (A–D)  
- Clearly marked correct answer  

### 🔹 Improve Writing
Provides:
- Improved professional version  
- Key improvements made  

---

## 🛠 Tech Stack

### Frontend
- React (Functional Components)
- useState & useEffect
- Axios
- Responsive UI
- Loading indicator
- Error handling

### Backend
- Node.js
- Express.js
- dotenv (environment variables)
- CORS enabled
- Secure AI API integration

### AI Integration
- LLM API (OpenAI / OpenRouter)
- Structured backend prompt construction
- Secure API key handling

---

## 📁 Project Structure


ai-student-assistant/
│
├── client/ # React Frontend
│ ├── src/
│ ├── components/
│ ├── App.jsx
│ └── package.json
│
├── server/ # Express Backend
│ ├── routes/
│ ├── controllers/
│ ├── services/
│ ├── server.js
│ └── package.json
│
└── README.md


---

## 🔐 Environment Setup

Create a `.env` file inside the `server` folder:


PORT=5000
OPENAI_API_KEY=your_api_key_here


⚠️ Never commit your real API key to GitHub.

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository


git clone https://github.com/karthikeyavelivela/one-var.git

cd one-var


### 2️⃣ Install Backend Dependencies


cd server
npm install


### 3️⃣ Install Frontend Dependencies


cd ../client
npm install


---

## ▶️ Running the Application

### Start Backend


cd server
npm run dev


Runs at:

http://localhost:5000


### Start Frontend

Open a new terminal:


cd client
npm run dev


Runs at:

http://localhost:5173


---

## 📡 Sample API Request

**POST** `/api/ask`


{
"text": "What is polymorphism in OOP?",
"mode": "Explain a Concept"
}


### Sample Response


{
"success": true,
"data": "1. Definition: ... \n2. Example: ..."
}
