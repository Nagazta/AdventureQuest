import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomeSection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/Student/StudentDashboard";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import { useAuth } from "./context/AuthContext";
import "./App.css";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          user?.role === "student" ? (
            <StudentDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/teacher-dashboard"
        element={
          user?.role === "teacher" ? (
            <TeacherDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
