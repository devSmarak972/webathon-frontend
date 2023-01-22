import React from "react";

const Slider = ({event}) => {
  return (
    <section id="home" className="hero-area img-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>{event.title}</h1>
              <p>{event.desc}</p>
              <a href=" " className="main-btn btn-hover">
                Apply
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
