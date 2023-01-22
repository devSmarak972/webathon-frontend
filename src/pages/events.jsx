import React from 'react'
// import Preloader from "../components/preloader/Preloader";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Timeline from "../components/timeline/Timeline";
import Footer from "../components/footer/Footer";
import Rules from "../components/rules_eligibility/Rules";
import "../components/assets/css/main.css";
const Events = () => {
    var currevent=localStorage.getItem("currevent");
    console.log(currevent);
  return (
    <>
      {/* <Preloader /> */}
      {/* <Sidebar /> */}
      <Header />
      <Slider />
      <About />
      <br />
      <br />
      <br />
      <br />
      <Timeline />
      <br />
      <br />
      <br />
      <br />
      <Rules />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default Events
