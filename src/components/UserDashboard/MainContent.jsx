import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/style.css'

const MainContent = () => {

  return (
    <>
    <div className="container" style={{minWidth: '90%'}}>
                <div className="">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="false">Today</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active show" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="true">This Week</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="contact-tab" data-toggle="tab" to="#contact" role="tab" aria-controls="contact" aria-selected="false">All</Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{textAlign:'center'}}>User</th>
                                                        <th style={{textAlign:'center'}}>Competitions</th>
                                                        <th style={{textAlign:'center'}}>Registration Deadline</th>
                                                        <th style={{textAlign:'center'}}>Team Status</th>
                                                        <th style={{textAlign:'center'}}>Team Limit</th>
                                                        <th className="text-right"></th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{textAlign:'center'}}>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:'40px'}} />Shivansh Jha</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">DecipHR</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">8:00 PM, 25 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Available</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 ">3</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Gargi</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Typing Contest</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">11:59 AM, 22 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-red">Missed</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 ">1</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                       
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Shiva Raj</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">GraphiX</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">10:23 AM, 27 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-purple">Filled</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 ">2</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Shivansh Jha</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Robowars</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">4:28 PM, 25 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Available</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 ">4</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                    <th style={{textAlign:'center'}}>User</th>
                                                        <th style={{textAlign:'center'}}>Competitions</th>
                                                        <th style={{textAlign:'center'}}>Registration Deadline</th>
                                                        <th style={{textAlign:'center'}}>Team Status</th>
                                                        <th style={{textAlign:'center'}}>Team Limit</th>
                                                        <th className="text-right"></th>
                                                    </tr>
                                                </thead>
                                                <tbody  style={{textAlign:'center'}}>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Gargi</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Typing Contest</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">11:59 AM, 22 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-red">Missed</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">1</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:'40px'}} />Shivansh Jha</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">DecipHR</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">8:00 PM, 25 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Available</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">3</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Shivansh Jha</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Robowars</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">4:28 PM, 25 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Available</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">4</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Shiva Raj</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">GraphiX</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">10:23 AM, 27 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-purple">Filled</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">2</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                    <th style={{textAlign:'center'}}>User</th>
                                                        <th style={{textAlign:'center'}}>Competitions</th>
                                                        <th style={{textAlign:'center'}}>Registration Deadline</th>
                                                        <th style={{textAlign:'center'}}>Team Status</th>
                                                        <th style={{textAlign:'center'}}>Team Limit</th>
                                                        <th className="text-right"></th>
                                                    </tr>
                                                </thead>
                                                <tbody  style={{textAlign:'center'}}>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Shiva Raj</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">GraphiX</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">10:23 AM, 27 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-purple">Filled</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">2</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle m-r-10" style={{width:'40px'}} />Shivansh Jha</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">DecipHR</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">8:00 PM, 25 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Available</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">3</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Gargi</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Typing Contest</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">11:59 AM, 22 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-red">Missed</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">1</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{width:'40px'}} />Shivansh Jha</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Robowars</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">4:28 PM, 25 Jan 2023</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Available</h6>
                                                        </td>
                                                         <td>
                                                            <h6 className="m-0 ">4</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle  f-10"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                </div>
    </>
  )
}

export default MainContent