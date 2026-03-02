import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Nav from "./components/Nav";
import Users from "./pages/Users";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
