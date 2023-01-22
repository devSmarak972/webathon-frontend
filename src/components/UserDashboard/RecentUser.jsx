import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/style.css'

const RecentUser = () => {
  return (
    <>


    <div className="container">
    <div className="">
                                    <div className="card Recent-Users">
                                        <div className="card-header">
                                            <h5>Recent Request</h5>
                                        </div>
                                        <div className="card-block px-0 py-3">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <tbody>
                                                        <tr className="unread">
                                                            <td><img className="rounded-circle" style={{width:'40px'}} /></td>
                                                            <td>
                                                                <h5>Pitch Perfect</h5>
                                                                <h6 className="mb-1">Ayush Kumar</h6>
                                                                <p className="m-0">I wish to be an entrepreneur…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>11 JAN 12:56</h6>
                                                            </td>
                                                            <td><Link href="#!" className="label theme-bg2 text-white f-12">Reject</Link><Link to="#!" className="label theme-bg text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr className="unread">
                                                            <td><img className="rounded-circle" style={{width:'40px'}} /></td>
                                                            <td>
                                                                <h5>DecipHR</h5>
                                                                <h6 className="mb-1">Gargi</h6>
                                                                <p className="m-0">i am really good at manag…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>11 JAN 10:35</h6>
                                                            </td>
                                                            <td><Link href="#!" className="label theme-bg2 text-white f-12">Reject</Link><Link href="#!" className="label theme-bg text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr className="unread">
                                                            <td><img className="rounded-circle" style={{width:'40px'}} /></td>
                                                            <td>
                                                                <h5>Robowars</h5>
                                                                <h6 className="mb-1">Shivansh Jha </h6>
                                                                <p className="m-0">I am an undergraduate stud…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>9 JAN 17:38</h6>
                                                            </td>
                                                            <td><Link href="#!" className="label theme-bg2 text-white f-12">Reject</Link><Link href="#!" className="label theme-bg text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr className="unread">
                                                            <td><img className="rounded-circle" style={{width:'40px'}}  /></td>
                                                            <td>
                                                                <h5>Quizverse</h5>
                                                                <h6 className="mb-1">Rishi Raj</h6>
                                                                <p className="m-0">Taking part in quizzes make…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted f-w-300"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>19 JAN 12:56</h6>
                                                            </td>
                                                            <td><Link href="#!" className="label theme-bg2 text-white f-12">Reject</Link><Link href="#!" className="label theme-bg text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr className="unread">
                                                            <td><img className="rounded-circle"style={{width:'40px'}} /></td>
                                                            <td>
                                                                <h5>GraphiX</h5>
                                                                <h6 className="mb-1">Shiva Raj</h6>
                                                                <p className="m-0">I guess it is necessary to…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>21 JAN 12:56</h6>
                                                            </td>
                                                            <td><Link href="#!" className="label theme-bg2 text-white f-12">Reject</Link><Link href="#!" className="label theme-bg text-white f-12">Approve</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            

    </div>
                            
    </>
  )
}

export default RecentUser