import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('');

  function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  }

  function revertBackground() {
    setBgColor('');
  }

  function done(e) {
    e.preventDefault();
    alert('Your message was submitted!');
    e.target.reset();
  }

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center top-info" id="my-info">
          <div className="col-md-4 align-right mb-4 mb-md-0">
            <img
              src="https://ik.imagekit.io/iwjihms56/Portfolio/8919c77c-a6bc-4d96-a411-5463a9b2c7a5.jpeg?updatedAt=1754539631747"
              alt="My Photo"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8 top-info-inside">
            <h1>Know me!</h1>
            <h3>I am Nathan Hero</h3>
            <p>
              <br />
              <strong>Age:</strong> 20
              <br />
              <strong>Section:</strong> C3A
              <br />
              <strong>Course:</strong> Computer Science
              <br />
              <strong>Student number:</strong> 2023342281
            </p>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-md navbar-dark custom-bar fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyPortfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-text" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link nav-bring" href="#my-info">
                  My Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-bring" href="#portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-bring" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* PORTFOLIO */}
      <section
        className="portfolio-section container"
        id="portfolio"
        style={{ marginTop: "80px", backgroundColor: bgColor }}
      >
        <h2 className="text-center mb-5 glitch">My Projects</h2>
        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card project-card h-100 portfolio-card">
              <img
                src="https://ik.imagekit.io/iwjihms56/Portfolio/image_2025-08-03_105812031.png?updatedAt=1754189822903"
                className="card-img-top size-image"
                alt="Project 1"
              />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  onClick={changeBackgroundColor}
                  style={{ cursor: "pointer" }}
                >
                  Electives Participation Certificate
                </h5>
                <p className="card-text">
                  Certificate given after attending and exploring your future
                  elective
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModal1"
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card project-card h-100 portfolio-card">
              <img
                src="https://ik.imagekit.io/iwjihms56/Portfolio/Portfolio%20art.png?updatedAt=1754487852935"
                className="card-img-top size-image"
                alt="Project 2"
              />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  onClick={changeBackgroundColor}
                  style={{ cursor: "pointer" }}
                >
                  Proudest Artwork
                </h5>
                <p className="card-text">
                  Latest completed art work and banner of all of my online
                  profiles
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModal2"
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card project-card h-100 portfolio-card">
              <img
                src="https://ik.imagekit.io/iwjihms56/Portfolio/Portfolio%20art%203.png?updatedAt=1754488366374"
                className="card-img-top size-image"
                alt="Project 3"
              />
              <div className="card-body">
                <h5
                  className="card-title project-title"
                  onClick={revertBackground}
                  style={{ cursor: "pointer" }}
                >
                  Godot Platformer game
                </h5>
                <p className="card-text">
                  A Platformer Godot test game that is still in development
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModal3"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="text-center mb-5 title-color">Contact Me</h2>
          <form onSubmit={done} id="contact">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="name" className="form-inst">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Ex. John Doe"
                  required
                />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="email" className="form-inst">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Ex. YourEmail@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-inst">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                placeholder="Type message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success custom-button">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* MODALS */}
      <div className="modal fade" id="projectModal1" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header custom-bar">
              <h5 className="modal-title">
                Electives Participation Certificate
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body portfolio-card">
              <img
                src="https://ik.imagekit.io/iwjihms56/Portfolio/image_2025-08-03_105812031.png?updatedAt=1754189822903"
                className="card-img-top"
                alt="Project 1"
              />
              This certificate was obtained after joining an orientation about
              my future elective and gained valuable insights on possible
              future job opportunities.
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="projectModal2" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header custom-bar">
              <h5 className="modal-title">Proudest Artwork</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body portfolio-card">
              <img
                src="https://ik.imagekit.io/iwjihms56/Portfolio/Portfolio%20art.png?updatedAt=1754487852935"
                className="card-img-top"
                alt="Project 2"
              />
              This artwork of the character named Zani from WutheringWaves was
              one of my proudest works for it is one of my cleanest. It took 3
              hours in total to make and became the main banner of most of my
              socials.
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="projectModal3" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header custom-bar">
              <h5 className="modal-title">Godot Platformer game</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body portfolio-card">
              <img
                src="https://ik.imagekit.io/iwjihms56/Portfolio/Portfolio%20art%203.png?updatedAt=1754488366374"
                className="card-img-top"
                alt="Project 3"
              />
              My very first platformer game where I got to test out the
              capabilities of Godot. Though not complete, it has the basic
              features such as environment, jump, left/right movement, and an
              attack mechanic.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;