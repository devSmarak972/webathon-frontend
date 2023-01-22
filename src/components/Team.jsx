import React from "react";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./team.css";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// img,
//         title,
//         orgName,
//         modeOfEvent,
//         visibility,
//         eligibility,
//         priceMoney,
//         teamSize,
//         fee,
//         regDeadline,
//         startDate,
//         endDate,
//         incentives,
//         description,
const Team = () => {
    const navigate = useNavigate();
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [orgName, setOrg] = useState("");
    const [mode, setMode] = useState("");
    const [eligibility, setEligibility] = useState("");
    const [prize, setPrize] = useState({});
    const [teamsize, setTeamsize] = useState(1);
    const [fee, setFee] = useState("");
    const [domain, setDomain] = useState("");
    const [regDeadline, setDeadline] = useState(Date());
    const [startDate, setStartDate] = useState(Date());
    const [endDate, setEndDate] = useState(Date());
    const [incentives, setincentives] = useState("");
    const [rewards, setrewards] = useState("");
    const [desc, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [rounds, setrounds] = useState([]);
    const [roundnum, setroundnum] = useState(0);

 
    const handlerounds=(event)=>{
        console.log(event.target.value);
    setroundnum(parseInt(event.target.value));
    }
    const rounddetails=()=>{
        var list=[];
        for(var index=0;index<roundnum;index++)
        list.push(<div className="form-outline mb-4">
    <label className="form-label" for={"round"+index}>Round {index+1}:</label>
    {/* <input type="file" id="form6Example6" className="form-control" /> */}
    <input type="text" id={"round"+index} className="form-control"  onChange={handlerounddetail}/>
    {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
</div>)
return list;
    }
    const handlerounddetail=(event)=>{
        var temp=rounds;
       temp[parseInt(event.target.id.substring(5))]=event.target.value;
       setrounds(temp);

    }
    const handletitle=(event)=>{
    setTitle(event.target.value);
    }
    const handleincentives=(event)=>{
    setincentives(event.target.value);
    }
    const handlerewards=(event)=>{
    setrewards(event.target.value);
    }
    
    const handlefirstprize=(event)=>{
    
    setPrize(st=>{
        var temp=st;
        temp["winner"]=event.target.value;
        return temp;
    });

    }
    const handlesecondprize=(event)=>{
        setPrize(st=>{
            var temp=st;
            temp["firstRunnerUp"]=event.target.value;
            return temp;
        });
    }
    const handlethirdprize=(event)=>{
        setPrize(st=>{
            var temp=st;
            temp["secondRunnerUp"]=event.target.value;
            return temp;
        });
    }
 
    const handleimg=(event)=>{
    setImg(event.target.value);
    }
    const handledomain=(event)=>{
    setDomain(event.target.value);
    }
    const handleorg=(event)=>{
    setOrg(event.target.value);
    }
    const handlecategory=(event)=>{
    setOrg(event.target.value);
    }
    const handlemode=(event)=>{
    setMode(event.target.value);
    }
    const handleeligibility=(event)=>{
    setEligibility(event.target.value);
    }
    const handledeadline=(event)=>{
    setDeadline(event.target.value);
    }
    const handlestart=(event)=>{
    setStartDate(event.target.value);
    }
  
    const handleend=(event)=>{
    setEndDate(event.target.value);
    }
    const handledesc=(event)=>{
    setDescription(event.target.value);
    }
    const handlefee=(event)=>{
    setFee(event.target.value);
    }
    const handleteamsize=(event)=>{
        console.log(event.target.value);
    setTeamsize(parseInt(event.target.value));
    }
    const handleurl=(event)=>{
    setUrl(event.target.value);
    }
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
       console.log("here");
       const userdata=localStorage.getItem("data");
console.log(userdata);
var uid=userdata._id;

var status="Live";
console.log(teamsize,"teamsize");
        //   const { email, username, password } = values;
          const { data } = await axios.post('http://localhost:3422/api/comp/addcomp', {
            img,
            title,
            orgName,
            mode,
            eligibility,
            prize,
            teamsize,
            fee,
            regDeadline,
            startDate,
            endDate,
            incentives,
            rewards,desc,url,uid,status,domain

          });
          console.log(data);
    
          if (data.success === false) {
            toast.error(data.msg, toastOptions);
          }
          if (data.success === true) {
            console.log("done",data)
        }
        navigate("/dash");
        
      };
    

  

    return (
        <>
            <div className="container team">

                <form  action="" onSubmit={(event) => handleSubmit(event)}>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <h1>Enter Competition Information</h1>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Competition name</label>
                                <input type="text" id="form6Example1" className="form-control" placeholder="Competition name" onChange={handletitle}/>
                                {/* <label className="form-label" for="form6Example1">First name</label> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Opportunity type</label>
                                <input type="text" id="form6Example2" className="form-control" placeholder="Opporunity type"  onChange={handlecategory}/>
                                {/* <label className="form-label" for="form6Example2">Last name</label> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Text input --> */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example3">Organisation name</label>
                        <input type="text" id="form6Example3" className="form-control" placeholder="Organisation name"  onChange={handleorg} />
                        {/* <label className="form-label" for="form6Example3">Team name</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example3">Domain:</label>
                        <input type="text" id="form6Example3" className="form-control" placeholder="Domain name"  onChange={handledomain} />
                        {/* <label className="form-label" for="form6Example3">Team name</label> */}
                    </div>

                    {/* <!-- Text input --> */}
                    {/* <div className="form-outline mb-4">
                        <input type="text" id="form6Example4" className="form-control" />
                        <label className="form-label" for="form6Example4">Address</label>
                    </div> */}

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example5">Website URL</label>
                        <input type="email" id="form6Example5" className="form-control" placeholder="Website URL"  onChange={handleurl}/>
                        {/* <label className="form-label" for="form6Example5">Email</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example6">Maximum Number of Team Members</label>
                        <input type="text" id="form6Example6" className="form-control" placeholder="Website URL"  onChange={handleteamsize}/>
                        {/* <label className="form-label" for="form6Example5">Email</label> */}
                    </div>

                    {/* <!-- Number input --> */}
                    

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example6" style={{"marginRight":"20px"}}>Mode of competition </label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <select name="mode" id="mode" className="form-control"  onChange={handlemode}>
                            <option value="Offline">Offline</option>
                            <option value="Online">Online</option>
                        </select>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example6">Logo Url</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example6" className="form-control"  onChange={handleimg}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example10">Registration Fee</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example10" className="form-control"  onChange={handlefee}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <div className="row">
                    <h4>Prize Details:</h4>
                    <div className="form-outline mb-4 col-lg-4">
                        <label className="form-label" for="form6Example14">Winner</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example14" className="form-control"  onChange={handlefirstprize}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <div className="form-outline mb-4 col-lg-4">
                        <label className="form-label" for="form6Example15">First Runner Up</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example15" className="form-control"  onChange={handlesecondprize}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <div className="form-outline mb-4 col-lg-4">
                        <label className="form-label" for="form6Example16">Second Runner Up</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example16" className="form-control"  onChange={handlethirdprize}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example17">Other Incentives (Internships, Placements etc.)</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example17" className="form-control"  onChange={handleincentives}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example19">Total Prize Pool</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example19" className="form-control"  onChange={handlerewards}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <h4>Timeline:</h4>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example11">Registration Deadline</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example11" className="form-control" placeholder="YYYY/MM/DD" onChange={handledeadline}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <div className="row">
                    <div className="form-outline mb-4 col-lg-6">
                        <label className="form-label" for="form6Example12">Start Date</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example12" className="form-control" placeholder="YYYY/MM/DD" onChange={handlestart}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    <div className="form-outline mb-4 col-lg-6">
                        <label className="form-label" for="form6Example13">End Date</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example13" className="form-control" placeholder="YYYY/MM/DD" onChange={handleend}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example21">Number of Rounds:</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example21" className="form-control"  onChange={handlerounds}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>
                    {
                   rounddetails()
                  
}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example14">Eligibility (if any)</label>
                        {/* <input type="file" id="form6Example6" className="form-control" /> */}
                        <input type="text" id="form6Example14" className="form-control"  onChange={handleeligibility}/>
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>

                    {/* <!-- Message input --> */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example7">Description</label>
                        <textarea className="form-control" id="form6Example7" rows="4" placeholder="Additional information"  onChange={handledesc}></textarea>
                        {/* <label className="form-label" for="form6Example7">Additional information</label> */}
                    </div>

                    {/* <!-- Checkbox --> */}
                    {/* <div className="form-check d-flex justify-content-center mb-4">
                    <label className="form-check-label" for="form6Example8"> Create an account? </label>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                        <label className="form-check-label" for="form6Example8"> Create an account? </label>
                    </div> */}

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">Create Competition</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Team;