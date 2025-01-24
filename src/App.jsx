import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/add-tasks" element={<h1>New Task</h1>} />
        <Route path="/task/:id" element={<h1>Update Task</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
