import React from 'react'
// import Preloader from "../components/preloader/Preloader";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Timeline from "../components/timeline/Timeline";
import Footer from "../components/footer/Footer";
import Rules from "../components/rules_eligibility/Rules";
import "../components/assets/css/main.css";
import "../components/assets/css/style.css";
// import "../components/assets/css/tiny-slider.css";
const Events = () => {
    var currevent=JSON.parse(localStorage.getItem("currevent"));
    console.log(currevent);
  return (
    <>
      {/* <Preloader /> */}
      {/* <Sidebar /> */}
      <Header event={currevent}/>
      <Slider event={currevent}/>
      <About event={currevent}/>
      <br />
      <br />
      <br />
      <br />
      <Timeline event={currevent}/>
      <br />
      <br />
      <br />
      <br />
      <Rules event={currevent}/>
      <br />
      <br />
      <br />
      <br />
      <Footer event={currevent} />
    </>
  )
}

export default Events
