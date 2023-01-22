import React from 'react'
import { Link } from "react-router-dom";
import RecentUser from '../components/UserDashboard/RecentUser';
import MainContent from '../components/UserDashboard/MainContent';
import StatisticsYearChart from '../components/UserDashboard/StatisticsYearChart';
import Navbar from '../components/Navbar';
// import '../components/assets/css/style.css'
// import Recentuser from '../components/UserDashboard/RecentUser'
// import x from '../components/assets/images/user/'

const UserDashboard = () => {
  return (
    <>
    <div className="container" style={{width:'100%', marginTop: '2%'}}>
        <div className="row">
            <div className="col-lg-8"> <RecentUser/></div>
            <div className="col-lg-4"> <StatisticsYearChart/></div>
        </div>
        <div className="row" >
              
        <div className="col-lg-12"> <MainContent/></div>
        </div>
    </div>
 
    
    </>
  )
}

export default UserDashboard