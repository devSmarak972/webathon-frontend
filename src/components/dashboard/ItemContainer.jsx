import React from "react";

const ItemContainer = ({complist}) => {
 
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <main className="col-lg-9">
        <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
          <strong className="d-block py-2">{complist.length} Items found </strong>
          <div className="ms-auto">
            <select className="form-select d-inline-block w-auto">
              <option value="0">Best match</option>
              <option value="1">Recommended</option>
              <option value="2">High rated</option>
              <option value="3">Randomly</option>
            </select>
          </div>
        </header>
        {complist.length>0?complist.map((el) => {
        
          return (
            <div className="card card-product-list" key={el.title}>
              <div className="row g-0">
                <div className="col-xl-3 col-md-4">
                  <a href=" " className="img-wrap">
                    <img src="../../assets/images/8.webp" alt="" />{" "}
                  </a>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <div className="card-body">
                    <a href=" " className="title h5">
                      {el.title}{" "}
                    </a>
                    <span href=" " class="org" style={{color:"gray",fontSize:"0.9em"}} >{el.orgName?el.orgName:""}</span>

                    <div className="rating-wrap mb-2">
                      <ul className="rating-stars">
                        <li className="stars-active" style={{ width: "90%" }}>
                          <img
                            src="../../assets/images/stars-active.svg"
                            alt=""
                          />
                        </li>
                        <li>
                          {" "}
                          <img
                            src="../../assets/images/starts-disable.svg"
                            alt=""
                          />{" "}
                        </li>
                      </ul>
                      <span className="label-rating text-warning">
                        <i className="fa-regular fa-clock"></i> {el.timeleft} days
                        left
                      </span>
                      <i className="dot"></i>
                      <span className="label-rating text-muted">
                        {el.applied} applied
                      </span>
                    </div>
                    <p className="descText"> {el.desc}</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="info-aside">
                    <div className="price-wrap">
                      <span className="price h5">
                        {" "}
                        <i
                          className="fa-solid fa-medal"
                          style={{ padding: "5px" }}
                        ></i>
                        {el.incentive}
                      </span>
                    </div>
                    <p className="text-success">
                      <i className="fa fa-user-plus" style={{ padding: "5px" }}></i>
                      Team Size: {el.teamsize}
                    </p>
                    <br />
                    <div className="mb-3">
                      <a href=" " className="btn btn-primary">
                        {" "}
                        Apply{" "}
                      </a>
                      <a href=" " className="btn btn-light btn-icon">
                        {" "}
                        <i className="fa fa-heart"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }):<p>No Matches Found</p>
        }

        <hr />

        <footer className="d-flex mt-4">
 
          <nav className="ms-3">
            <ul className="pagination">
              <li className="page-item" >
                <a
                  className="page-link"
                  href=" "
                >
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#"
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </>
  );
};

export default ItemContainer;
