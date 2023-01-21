import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./team.css"

const Team = () => {
    return (
        <>
            <div className="container">

                <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <h1>Enter Team Information</h1>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                            <label className="form-label" for="form6Example1">Competition name</label>
                                <input type="text" id="form6Example1" className="form-control" placeholder="Competition name" />
                                {/* <label className="form-label" for="form6Example1">First name</label> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                            <label className="form-label" for="form6Example2">Opportunity type</label>
                                <input type="text" id="form6Example2" className="form-control" placeholder="Opporunity type" />
                                {/* <label className="form-label" for="form6Example2">Last name</label> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Text input --> */}
                    <div className="form-outline mb-4">
                    <label className="form-label" for="form6Example3">Organisation name</label>
                        <input type="text" id="form6Example3" className="form-control" placeholder="Organisation name" />
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
                        <input type="email" id="form6Example5" className="form-control" placeholder="Website URL" />
                        {/* <label className="form-label" for="form6Example5">Email</label> */}
                    </div>

                    {/* <!-- Number input --> */}
                    <div className="form-outline mb-4">
                    <label className="form-label" for="form6Example6">Number of team members</label>
                        <input type="number" id="form6Example6" className="form-control" placeholder="Number of team members" />
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" for="form6Example6">Logo</label>
                        <input type="file" id="form6Example6" className="form-control" />
                        {/* <label className="form-label" for="form6Example6">Number of team members</label> */}
                    </div>

                    {/* <!-- Message input --> */}
                    <div className="form-outline mb-4">
                    <label className="form-label" for="form6Example7">Additional information</label>
                        <textarea className="form-control" id="form6Example7" rows="4" placeholder="Additional information"></textarea>
                        {/* <label className="form-label" for="form6Example7">Additional information</label> */}
                    </div>

                    {/* <!-- Checkbox --> */}
                    {/* <div className="form-check d-flex justify-content-center mb-4">
                    <label className="form-check-label" for="form6Example8"> Create an account? </label>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                        <label className="form-check-label" for="form6Example8"> Create an account? </label>
                    </div> */}

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">Create Team</button>
                </form>
            </div>
        </>
    )
}

export default Team;