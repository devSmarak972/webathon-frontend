import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="map-img">
        <img src="assets/img/footer/map-bg.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-links">
              <div className="footer-logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.svg" alt="" />
                </a>
              </div>
              <ul>
                <li>
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Timeline</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Rules</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
