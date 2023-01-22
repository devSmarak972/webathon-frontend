import React, { useState } from "react";
import { useEffect } from "react";
import Article from "./Article";

const Filterbar = ({ filterHandler }) => {
  var categorylist = [
    { category: "Maths", num: 110 },
    { category: "Physics", num: 105 },
    { category: "Data Analytics", num: 20 },
    { category: "Web Development", num: 220 },
  ];
  var statuslist=["All","Live","Closed",""];
  
  var domainlist = ["All", "Engineering", "Arts", "Finance"];
  const [Status, setStatus] = useState([true, false, false, false]);
  
  const [Team, setTeam] = useState([true, false, false, false]);
  const [Category, setCategory] = useState(new Set());
  const [Domain, setDomain] = useState(0);
  const [filters, setFilters] = useState({
    domain: "Finance",
    status: "Live",
    teamsize: 3,
    category: [],
  });
  useEffect(()=>{
    
    var tempfilter = {
      domain: domainlist[Domain],
      status: statuslist[Status.findIndex((el) => el === true)],
      teamsize: Team.findIndex((el) => el === true),
      category: [...Category],
    };
    setFilters(st=>{
      return tempfilter;
    })
  },[Team,Category,Domain,Status])
  useEffect(() => {
    
    filterHandler(filters);
  }, [filters]);

  console.log(Domain);
  const toggleCategory = (event) => {
    setCategory((st) => {
      var temp = new Set([...st]);
      if (st.has(event.target.id)) temp.delete(event.target.id);
      else temp.add(event.target.id);
      return temp;
    });
    console.log(event.target.id);
  };
  const statusChange = (event) => {
    console.log(event.target.attributes.getNamedItem("index").value);
    setStatus((st) => {
      var arr = new Array(4).fill(false);
      arr[parseInt(event.target.attributes.getNamedItem("index").value)] = true;
      return arr;
    });
  };
  const teamChange = (event) => {
    console.log(event.target.attributes.getNamedItem("index").value);
    setTeam((st) => {
      var arr = new Array(4).fill(false);
      arr[parseInt(event.target.attributes.getNamedItem("index").value)] = true;
      return arr;
    });
  };
  const domainChange = (event) => {
    console.log("domain change", event.target.id);
    var name = event.target.id;
    setDomain((st) => {
      return parseInt(name.charAt(name.length - 1));
    });
  };

  return (
    <div className="col-lg-3">
      <button
        className="btn btn-outline-secondary mb-3 w-100  d-lg-none"
        data-bs-toggle="collapse"
        data-bs-target="#aside_filter"
      >
        Show filter
      </button>

      <div id="aside_filter" className="collapse card d-lg-block mb-5">
        <div className="filter-group">
          <header className="card-header">
            <a
              href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i className="icon-control fa fa-chevron-down"></i>
              Status
            </a>
          </header>
          <div className="collapse show" id="collapse_aside3">
            <div className="card-body">
              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="All"
                  index="0"
                  checked={Status[3]}
                  onChange={statusChange}
                />
                <span className="btn btn-light"> All </span>
              </label>

              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="Live"
                  index="1"
                  checked={Status[1]}
                  onChange={statusChange}
                />
                <span className="btn btn-light"> Live </span>
              </label>

              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="Expired"
                  index="2"
                  checked={Status[2]}
                  onChange={statusChange}
                />
                <span className="btn btn-light"> Expired </span>
              </label>

              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="Closed"
                  index="3"
                  checked={Status[3]}
                  onChange={statusChange}
                />
                <span className="btn btn-light"> Closed </span>
              </label>
            </div>
          </div>
        </div>
        <div className="filter-group">
          <header className="card-header">
            <a
              href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i className="icon-control fa fa-chevron-down"></i>
              Team Size
            </a>
          </header>
          <div className="collapse show" id="collapse_aside3">
            <div className="card-body">
              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="All"
                  index="0"
                  checked={Team[0]}
                  onChange={teamChange}
                />
                <span className="btn btn-light"> 1 </span>
              </label>

              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="Live"
                  index="1"
                  checked={Team[1]}
                  onChange={teamChange}
                />
                <span className="btn btn-light"> 2 </span>
              </label>

              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="Expired"
                  index="2"
                  checked={Team[2]}
                  onChange={teamChange}
                />
                <span className="btn btn-light"> 3 </span>
              </label>

              <label className="checkbox-btn">
                <input
                  type="checkbox"
                  id="Closed"
                  index="3"
                  checked={Team[3]}
                  onChange={teamChange}
                />
                <span className="btn btn-light"> 3+ </span>
              </label>
            </div>
          </div>
        </div>
        <div className="filter-group">
          <header className="card-header">
            <a
              href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i className="icon-control fa fa-chevron-down"></i>
              Domain
            </a>
          </header>
          <div className="collapse show" id="collapse_aside3">
            <div className="card-body">
              {domainlist.map((el, index) => {
                // console.log(index,"ind");
                return (
                  <div class="form-check">
                    {el == domainlist[Domain] ? (
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadio"
                        id={"radio_" + index}
                        checked
                        onChange={domainChange}
                      />
                    ) : (
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadio"
                        id={"radio_" + index}
                        onChange={domainChange}
                      />
                    )}

                    <label class="form-check-label" htmlFor={"radio_" + index}>
                      {el}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="filter-group">
          <header className="card-header">
            <a
              href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside_brands"
            >
              <i className="icon-control fa fa-chevron-down"></i>
              Category
            </a>
          </header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              {categorylist.map((el) => {
                return (
                  <label className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={el.category}
                      value=""
                      checked={Category.has(el.category) ? true : false}
                      onChange={toggleCategory}
                    />
                    <span className="form-check-label"> {el.category} </span>
                    <span
                      className="badge rounded-pill bg-gray-dark float-end"
                      style={{
                        display: "inline-block",
                        padding: ".32em .7em",
                        fontSize: "0.83em",
                        fontWeight: "400",
                        lineHeight: ".9",
                        color: "#fff",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        verticalAlign: "baseline",
                        backgroundColor: "#9da1a7",
                      }}
                    >
                      {el.num}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="filter-group" >
    <header className="card-header">
      <a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" className="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside2">
        <i className="icon-control fa fa-chevron-down"></i>
        Team Size 
      </a>
    </header>
    <div className="collapse show" id="collapse_aside2">
      <div className="card-body">
        <input type="range" className="form-range" min="0" max="4"/>
        <div className="row mb-3">
          
        </div>
        <button className="btn btn-light w-100" type="button">Apply</button>
      </div>
    </div>
  </div> 
 */}
      </div>
    </div>
  );
};

export default Filterbar;
