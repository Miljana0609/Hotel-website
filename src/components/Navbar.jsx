import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-custom">

      <div className="container">
        <Link className="navbar-brand brand-logo" to="/">

          <div className="logo">

            <span className="logo-icon">CC</span>

            <div>
              <div className="logo-title">City Comfort</div>
              <div className="logo-sub">HOTEL</div>
            </div>

          </div>

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Hem
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rum
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/food">
                Restaurang
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/spa">
                Spa
              </Link>
            </li>


          </ul>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;