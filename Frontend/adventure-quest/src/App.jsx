import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import HomePage from "./components/HomeSection";
import About from "./components/AboutSection";
import FeaturesPage from "./components/FeaturesSection";
import ContactPage from "./components/ContactSection";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Landing layout with nested routes */}
      <Route path="/" element={<Landing />}>
        <Route index element={<HomePage />} /> {/* renders at "/" */}
        <Route path="about" element={<About />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
