import React from "react";
import CountUp from "react-countup";

const About = ({event} )=> {
  var date=new Date(event.regDeadline);
  console.log(date);
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  return (
    <section id="about" className="upcoming-section pt-150">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="section-title text-center mb-60">
              <h1>Details about this Event</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-counter">
              <div className="map-img">
                <img src="assets/img/upcoming/map-img.svg" alt="" />
              </div>
              <i className="fas fa-regular fa-calendar-days" />
              <h4 id="secondo1" className="countup" style={{color:"white"}}>
                <CountUp
                  start={0}
                  end={date.getDay()}
                  duration={2}
                  separator=" "
                  decimals={0}
                  delay={0}
                  enableScrollSpy={true}
                  suffix={" th "+monthNames[date.getMonth()]}
                ></CountUp>
              </h4>
              <span>Deadline</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-counter">
              <div className="map-img">
                <img src="assets/img/upcoming/map-img.svg" alt="" />
              </div>
              <i className="fas fa-regular fa-person" />
              <h4 id="secondo2" className="countup" style={{color:"white"}}>
                <CountUp
                  start={0}
                  end={2}
                  duration={2}
                  separator=" "
                  decimals={0}
                  delay={0}
                  enableScrollSpy={true}
                  suffix={"-"}
                ></CountUp>
                <CountUp
                  start={0}
                  end={event}
                  duration={2}
                  separator=" "
                  decimals={0}
                  delay={0}
                  enableScrollSpy={true}
                ></CountUp>
              </h4>
              <span>Team Size</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-counter">
              <div className="map-img">
                <img src="assets/img/upcoming/map-img.svg" alt="" />
              </div>
              <i class="fas fa-regular fa-trophy" />
              <h4 id="secondo3" className="countup" style={{color:"white"}}>
                <CountUp
                  start={0}
                  end={event.prize?event.prize:0}
                  duration={2}
                  separator=" "
                  decimals={0}
                  delay={0}
                  enableScrollSpy={true}
                  prefix={"Rs "}
                ></CountUp>
              </h4>
              <span>Prize</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
