import React,{useState} from "react";
import axios from "axios";
const ItemContainer = ({complist}) => {
  const [apply, setApply] = useState("")
  const [message, setMessage] = useState("")

 const handleapply=async (event)=>{
  var uid=JSON.parse(localStorage.getItem("data")).user._id;
  console.log(uid,JSON.parse(localStorage.getItem("data")),localStorage.getItem("data"));
  // var compid=event.target.id;

  const { data } = await axios.post('http://localhost:3422/api/comp/apply', {
    uid:uid,
    compid:apply,
    message:message,
  });
  console.log(data);
  setApply("");
  setMessage("");
 }
 const setevent=(event)=>{
  localStorage.setItem("currevent",JSON.stringify(complist[parseInt(event.target.id[6])]))
  console.log(complist[parseInt(event.target.id[6])],event.target.id)
 }
const handlemodal=(event)=>{
setApply(event.target.id);
}
const handlemessage=(event)=>{
setMessage(event.target.value);
}
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
        {complist.length>0?complist.map((el,index) => {
        
          return (
            <div className="card card-product-list" key={el.title}>
              <div className="row g-0">
                <div className="col-xl-3 col-md-4">
                  <a href=" " className="img-wrap">
                    <img src={el.img} alt="" />{" "}
                  </a>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <div className="card-body">
                    <a href={"/events/"+el._id} className="title h5" id={"title_"+index} onClick={setevent}>
                      {el.title}{" "}
                    </a>
                    <span href=" " class="org" style={{color:"gray",fontSize:"0.9em"}} >{el.orgName?el.orgName:""}</span>

                    <div className="rating-wrap mb-2">
                     
                      <span className="label-rating text-warning">
                        <i className="fa-regular fa-clock"></i> {Math.floor(Math.random() * 11)+1} days
                        left
                      </span>
                      <i className="dot"></i>
                      <span className="label-rating text-muted">
                        {Math.floor(Math.random() * 11)+2} applied
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
                        {el.rewards}
                      </span>
                    </div>
                    <p className="text-success">
                      <i className="fa fa-user-plus" style={{ padding: "5px" }}></i>
                      Team Size: {el.teamsize}
                    </p>
                    <br />
                    <div className="mb-3">
                      <button id={el._id} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handlemodal}>
                        {" "}
                        Apply{" "}
                      </button>
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
       <div className="modal">
        <div className="text-center">
          <input type="textarea" placeholder="Enter your message"></input>
          
        </div>
        
       </div>



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Enter a message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" onChange={handlemessage}></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={handleapply}>Apply</button>
      </div>
    </div>
  </div>
</div>

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
