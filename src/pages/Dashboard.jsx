import React, { useState, useEffect } from "react";
import Filterbar from "../components/dashboard/Filterbar";
import ItemContainer from "../components/dashboard/ItemContainer";
import Navbar from "../components/Navbar";


const Dashboard = () => {
 
  
  var complist = [
    {
      status: "Live",
      domain: "Finance",
      category: "Case Study",
      title: "MindFest Cura 22",
      applied: "46",
      timeleft: "17",
      deadline: "23/01/2023",
      incentive: "₹ 20000",
      teamsize: 4,
      orgName:"Indian Institute of Technology Kharagpur",
      user:"Bhavesh Mukheja",

      desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
    },
    {
      status: "Closed",
      domain: "Finance",
      category: "Case Study",
      title: "MindFest Cura 23",
      applied: "46",
      timeleft: "17",
      deadline: "30/01/2023",
      incentive: "20000",
      teamsize: 5,
      orgName:"Indian Institute of Technology Kharagpur",
      user:"Smarak Kanjilal",

      desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
    },
    {
      status: "Live",
      domain: "Finance",
      category: "Data Analytics",
      title: "Kharagpur Data Science Hackathon",
      applied: "46",
      timeleft: "17",
      incentive: "20000",
      teamsize: 4,
      deadline: "30/01/2023",
      orgName:"Indian Institute of Technology Kharagpur",
      user:"Smarak Kanjilal",

      desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
    },
  ];
var orglist=new Set(complist.map(el=>{
  return el.orgName;

}));
  const checkTeamSize = (filtersize, size) => {
    // console.log(filtersize,size);
    if (filtersize === 3 && size >= 4) return true;
    else if (filtersize === size - 1) return true;
    else return false;
  };
  const checkCategory = (filter, category) => {
    if (filter.length === 0) return true;
    for (var i = 0; i < filter.length; i++)
      if (category === filter[i]) return true;
    return false;
  };
  const [Data, setData] = useState(complist);
  const filterData = (filters) => {
    // console.log(filters,"filters");
    var filteredData = complist.filter((el) => {

      // status domain category teamsize
      // console.log((filters.domain==="All" || el.domain === filters.domain),(filters.status==="All"||el.status === filters.status),checkTeamSize(filters.teamsize, el.teamsize),checkCategory(filters.category, el.category))
      if (
        (filters.domain==="All" || el.domain === filters.domain) &&
        (filters.status==="All"||el.status === filters.status) &&
        checkTeamSize(filters.teamsize, el.teamsize) &&
        checkCategory(filters.category, el.category)
      )
        return true;
      else return false;
    });
    setData((st) => {
      return [...filteredData];
    });
  };
  var options=["Users","Competitions","Organisations"]
  return (
    <>
    <Navbar classes={["complist"]} options={options} data={complist}></Navbar>
      <section className="bg-primary py-5">
        <div className="container">
          <h2 className="text-white">Competitions</h2>
        </div>
      </section>
      <section className="padding-y">
        <div className="container">
          <div className="row">
            <Filterbar filterHandler={filterData}></Filterbar>
            <ItemContainer complist={Data}></ItemContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
