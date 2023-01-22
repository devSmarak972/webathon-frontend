import React from "react";

const Slider = () => {
  return (
    <section id="home" className="hero-area img-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>Event Name</h1>
              <p>Event Description</p>
              <a href="javascript:void(0)" className="main-btn btn-hover">
                Join Now
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img">
              <img src="assets/img/hero/hero-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
