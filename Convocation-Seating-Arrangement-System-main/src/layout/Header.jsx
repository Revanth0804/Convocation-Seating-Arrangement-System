import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg" id="nav">
            <img src="./src/assets/images/logo.jpeg" alt="" id="logo"/>
            <a class="navbar-brand" href="#" id="title">Convocation Seating Arrangement</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#student-search">Find Seat</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#visual-map">Visual Map</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#admin-dashboard">Admin Dashboard</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
      </header>
    </>
  );
};

export default Header;