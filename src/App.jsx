import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/tasks" element={<h1>Tasks</h1>} />
        <Route path="/add-tasks" element={<h1>New Task</h1>} />
        <Route path="/task/:id" element={<h1>Update Task</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
