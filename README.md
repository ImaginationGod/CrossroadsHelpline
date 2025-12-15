# React Redux CRUD Dashboard

A responsive CRUD dashboard built using **React.js (Vite)**, **Redux Toolkit**, and **Tailwind CSS v3.4.17**.  
The application fetches user data from a public API, stores it in Redux, and allows basic **Create, Read, Update, and Delete (CRUD)** operations.

---

## 🚀 Features

- Fetch data from a public **GET API**
- Global state management using **Redux Toolkit**
- Full **CRUD operations** (local state update via Redux)
- Clean and responsive dashboard UI
- Mobile-friendly design (card view on small screens)
- Loading and error handling
- Feature-based, scalable folder structure

---

## 🛠 Tech Stack

- **React.js** (with Vite)
- **Redux Toolkit**
- **React Redux**
- **Tailwind CSS v3.4.17**
- **Axios**
- **JSONPlaceholder API**

---

## 📡 API Used

https://jsonplaceholder.typicode.com/users

> Note: Create, Update, and Delete operations are handled locally in Redux (mock CRUD).

---

## 📂 Project Structure (Simplified)
```bash
src/
├── app/ # Redux store setup
├── features/users/ # Users slice & API logic
├── pages/ # Dashboard page
├── components/ # Reusable UI components
├── hooks/ # Custom Redux hooks
├── services/ # Axios instance
├── App.jsx
└── main.jsx
```

---

## ⚙️ Steps to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone <your-github-repo-url>
cd react-redux-crud-dashboard
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```

### 4️⃣ Open in Browser
Vite will provide a local URL, usually:
```bash
http://localhost:5173
```
---

## 🏳️‍🌈 Extra
### 📱 Responsive Behavior

- Mobile (<768px): Card-based layout

- Tablet/Desktop: Table-based dashboard

- Forms and buttons adapt automatically to screen size

### 🧪 CRUD Functionality

- Create: Add a new user (stored in Redux)

- Read: View users in table/card layout

- Update: Edit user details

- Delete: Remove a user from the list

---

## 👤 Author

- Harsh Tripathi
- MERN Stack Developer | React & Redux
- GitHub: https://github.com/ImaginationGod

---
