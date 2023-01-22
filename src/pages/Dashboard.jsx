import React, { useState } from "react";
import Filterbar from "../components/dashboard/Filterbar";
import ItemContainer from "../components/dashboard/ItemContainer";

const Dashboard = () => {
   var complist = [
     {
       status: "Live",
       Domain: "Finance",
       Category: [],
       title: "MindFest Cura 22",
       applied: "46",
       timeleft: "17",
       deadline: "23/01/2023",
       incentive: "₹ 20000",
       teamsize: 4,
       desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
     },
     {
       status: "Closed",
       Domain: "Finance",
       Category: "",
       title: "MindFest Cura 23",
       applied: "46",
       timeleft: "17",
       deadline: "30/01/2023",
       incentive: "20000",
       teamsize: 5,
       desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
     },
     {
       status: "Live",
       Domain: "Finance",
       Category: "Data Analytics",
       title: "Kharagpur Data Science Hackathon",
       applied: "46",
       timeleft: "17",
       incentive: "20000",
       teamsize: 4,
       deadline: "30/01/2023",

       desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
     },
   ];
  const checkTeamSize=(filtersize,size)=>{
    if(filtersize==3 && size>=4)return true;
    else if(filtersize==size-1)return true;
    else return false;
  }
  const checkCategory=(filter,category)=>{
    for(var i=0;i<filter.length;i++)
    if(category==filter[i])return true;
    return false;
  }
    const [Data, setData] = useState(complist);
    filterData=(filters)=>{
      filteredData=complist.filter(el=>{
        // status domain category teamsize
        if(el.Domain==filters.Domain && el.status==filters.status && checkTeamSize(filters.teamsize,el.teamsize) && checkCategory(filters.category,el.category) )
        return true;
        else<div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
        <label class="form-check-label" for="exampleRadios1">
        Default radio
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
        <label class="form-check-label" for="exampleRadios2">
        Second default radio
        </label>
        </div>
        
        
      })

    }
  return (
    <>
      <section className="bg-primary py-5">
        <div className="container">
          <h2 className="text-white">Competitions</h2>
        </div>
      </section>
      <section className="padding-y">
        <div className="container">
          <div className="row">
            <Filterbar complist={complist}></Filterbar>
            <ItemContainer complist={complist}></ItemContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
