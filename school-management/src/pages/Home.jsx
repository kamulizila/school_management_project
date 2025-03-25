import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importing Bootstrap's JS
import sc1 from "../assets/images/sc1.jpeg";  // Importing image
import school2 from "../assets/images/sc2.jpeg";  // Importing image
import school3 from "../assets/images/sc3.jpeg";  // Importing image

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Title Section */}
      <section className="text-center py-5 bg-light">
        <h1 className="display-3 text-primary fw-bold">School Management System</h1>
        <p className="lead">A comprehensive platform for managing school activities and operations.</p>
      </section>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm w-100">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">School Management System</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Students</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Teachers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Admissions</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Image Slider */}
      <div id="carouselExampleIndicators" className="carousel slide flex-grow-1 w-100" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner" style={{ height: "500px" }}>
          <div className="carousel-item active">
            <img src={sc1} className="d-block w-100" alt="School Image 1" />
            <div className="carousel-caption d-flex justify-content-center align-items-center text-center w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50">
              <div>
                <h5>Student Success</h5>
                <p>Enhancing student learning experiences.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={school2} className="d-block w-100" alt="School Image 2" />
            <div className="carousel-caption d-flex justify-content-center align-items-center text-center w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50">
              <div>
                <h5>Teacher Excellence</h5>
                <p>Providing top-tier education through qualified educators.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={school3} className="d-block w-100" alt="School Image 3" />
            <div className="carousel-caption d-flex justify-content-center align-items-center text-center w-100 h-100 position-absolute top-0 start-0 bg-dark bg-opacity-50">
              <div>
                <h5>Efficient Administration</h5>
                <p>Streamlining school management processes.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

   {/* About Section */}
<section className="container-fluid py-5 bg-light">
  <h2 className="text-center mb-4 text-uppercase fw-bold text-primary">About the School Management System</h2>
  <p className="text-center mb-5 lead text-muted">Our School Management System is designed to streamline all aspects of school operations, from managing students to empowering teachers, and enhancing administrative efficiency.</p>
  
  <div className="row g-4">
    {/* Student Success Card */}
    <div className="col-md-4">
      <div className="card shadow-lg border-0 rounded-3">
        <img src={sc1} className="card-img-top rounded-top" alt="Student Success" />
        <div className="card-body">
          <h5 className="card-title text-primary">Student Success</h5>
          <p className="card-text">Track student progress and enhance learning outcomes through advanced monitoring tools that support student development.</p>
        </div>
      </div>
    </div>

    {/* Teacher Excellence Card */}
    <div className="col-md-4">
      <div className="card shadow-lg border-0 rounded-3">
        <img src={school2} className="card-img-top rounded-top" alt="Teacher Excellence" />
        <div className="card-body">
          <h5 className="card-title text-primary">Teacher Excellence</h5>
          <p className="card-text">Empower teachers with a system that simplifies class management, grading, and communication for enhanced productivity.</p>
        </div>
      </div>
    </div>

    {/* Efficient Administration Card */}
    <div className="col-md-4">
      <div className="card shadow-lg border-0 rounded-3">
        <img src={school3} className="card-img-top rounded-top" alt="Efficient Administration" />
        <div className="card-body">
          <h5 className="card-title text-primary">Efficient Administration</h5>
          <p className="card-text">Streamline administrative tasks such as scheduling, record keeping, and reporting for smoother school operations.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-auto w-100">
        <div className="container">
          <p className="mb-1">&copy; {new Date().getFullYear()} School Management System. All rights reserved.</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
            <a href="#" className="text-white text-decoration-none">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
