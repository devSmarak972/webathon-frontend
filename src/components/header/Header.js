import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img src="assets/img/logo/logo.svg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#timeline">
                        Timeline
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#rules">
                        Rules
                      </a>
                    </li>
                  </ul>
                </div>
                {/* navbar collapse */}
              </nav>
              {/* navbar */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* navbar area */}
    </header>
  );
};

export default Header;
