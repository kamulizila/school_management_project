import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Students from './pages/Students.jsx';
import Teachers from './pages/Teachers.jsx';
import Navbar from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <h1 className="text-center text-primary mt-5">
          Welcome to the School Management System
        </h1>
        <p className="text-center">
          This is a simple application for managing school data.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Admin Panel</h5>
                <p className="card-text">Manage students, teachers, and more.</p>
                <a href="/students" className="btn btn-primary">Go to Admin</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Student Dashboard</h5>
                <p className="card-text">View assignments and exams.</p>
                <a href="/students" className="btn btn-success">Go to Dashboard</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teacher Dashboard</h5>
                <p className="card-text">Create assignments and grade students.</p>
                <a href="/teachers" className="btn btn-warning">Go to Teacher Panel</a>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
