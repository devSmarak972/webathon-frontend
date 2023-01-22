import React, { useState, useEffect } from "react";
import Filterbar from "../components/dashboard/Filterbar";
import ItemContainer from "../components/dashboard/ItemContainer";
import Navbar from "../components/Navbar";
import axios from "axios";

const Dashboard = () => {
  useEffect(() => {
   
    axios.get('http://localhost:3422/api/comp/fetchallcomp', {
      
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      console.log(response.data);
   

      setData(response.data);
      
    })
  }, [])
  
  // var complist = [
  //   {
  //     status: "Live",
  //     domain: "Finance",
  //     category: "Case Study",
  //     title: "MindFest Cura 22",
  //     applied: "46",
  //     timeleft: "17",
  //     regDeadline: "23/01/2023",
  //     incentive: "₹ 20000",
  //     teamsize: 4,
  //     orgName:"Indian Institute of Technology Kharagpur",
  //     user:"Bhavesh Mukheja",

  //     desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
  //   },
  //   {
  //     status: "Closed",
  //     domain: "Finance",
  //     category: "Case Study",
  //     title: "MindFest Cura 23",
  //     applied: "46",
  //     timeleft: "17",
  //     regDeadline: "30/01/2023",
  //     incentive: "20000",
  //     teamsize: 5,
  //     orgName:"Indian Institute of Technology Kharagpur",
  //     user:"Smarak Kanjilal",

  //     desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
  //   },
  //   {
  //     status: "Live",
  //     domain: "Finance",
  //     category: "Data Analytics",
  //     title: "Kharagpur Data Science Hackathon",
  //     applied: "46",
  //     timeleft: "17",
  //     incentive: "20000",
  //     teamsize: 4,
  //     regDeadline: "30/01/2023",
  //     orgName:"Indian Institute of Technology Kharagpur",
  //     user:"Smarak Kanjilal",

  //     desc: "Short description about the product goes here, for ex it features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
  //   },
  // ];
  const [Data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([...Data]);
var orglist=new Set(Data.map(el=>{
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
  
  const filterData = (filters) => {
    console.log(filters,Data,"filters");
    var filteredData = Data.filter((el) => {

      // status domain category teamsize
      if (
        (filters.domain==="All" || el.domain === filters.domain) &&
        (filters.status==="All"||el.status === filters.status) &&
        checkTeamSize(filters.teamsize, el.teamsize) &&
        checkCategory(filters.category, el.category)
      )
        return true;
      else return false;
    });
    setfilteredData((st) => {
      return [...filteredData];
    });
  };
  var options=["Users","Competitions","Organisations"]
  return (
    <>
    <Navbar classes={["complist"]} options={options} data={Data}></Navbar>
      <section className="bg-primary py-5">
        <div className="container" style={{textAlign:'center'}}>
          <h1 className="text-white">Competitions</h1>
        </div>
      </section>
      <section className="padding-y">
        <div className="container">
          <div className="row">
            <Filterbar filterHandler={filterData}></Filterbar>
            <ItemContainer complist={filteredData}></ItemContainer>
          </div>
        </div>
      </section>

    </>
  );
};

export default Dashboard;
