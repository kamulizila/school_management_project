import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx'; // Ensure this is correctly imported
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar should be imported correctly */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
