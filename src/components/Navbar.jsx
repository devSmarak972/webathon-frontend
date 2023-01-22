import React from 'react'
import { useState } from 'react'
import "./navsearch.css";
const Navbar = ({classes,options,data}) => {
 document.body.addEventListener("click", function(){
  document.querySelector(".instant-results").style.display="none";}
  )
  const [filteredSearch, setFilteredItems] = useState([])
  // console.log(classes,data,options)
  const handleSearch=(event)=>{
      // console.log(event.target.value);
      var selectby=document.getElementById("select-"+classes[0]).value;
      console.log(selectby);
      var filterSearch=data.filter(el=>{
        if(selectby==="Users" && el.user.includes(event.target.value)) return true;
        else if(selectby==="Competitions" && el.title.includes(event.target.value))return true;
        else if(selectby==="Organisations" && el.orgName.includes(event.target.value) )
        return true;
        else return false;
      });
      console.log(filterSearch);
      setFilteredItems((st)=>{

        return filterSearch;
      });
      var results=document.querySelector(".instant-results");
      if(event.target.value==="")
      {
      results.style.display="none";
      }
      else
      results.style.display="block";



  }
  return (
    <>
      
<header class="section-header">	
	<section class="header-main">
    <div class="container">
      <div class="row gy-3 align-items-center">
        <div class="col-lg-2 col-sm-4 col-4">
          <a href="http://bootstrap-ecommerce.com/" class="navbar-brand">
            <img class="logo" height="40" src="./Website layout sample_files/logo.svg"/>
          </a>
        </div>
        <div class="order-lg-last col-lg-5 col-sm-8 col-8">
          <div class="float-end">
            <a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" class="btn btn-light"> 
                <i class="fa fa-user"></i>  <span class="ms-1 d-none d-sm-inline-block">Sign in  </span> 
            </a>
            <a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" class="btn btn-light"> 
              <i class="fa fa-heart"></i>  <span class="ms-1 d-none d-sm-inline-block">Wishlist</span>   
            </a>
            <a data-bs-toggle="offcanvas" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#offcanvas_cart" class="btn btn-light"> 
              <i class="fa fa-shopping-cart"></i> <span class="ms-1">My cart </span> 
            </a>
              </div>
        </div> 
        <div class="col-lg-5 col-md-12 col-12">
          <form action="" class="form-search" >
            <div class="input-group">
            <input type="search" class={"form-control "+classes[0]} style={{width:"55%"}} placeholder="Search" onChange={handleSearch}/>
              <select class="form-select" id={"select-"+classes[0]} style={{width:"max-content"}}>
                {
                  options.map(el=>{

                   return <option value={el}>{el}</option>
                  })
               }
              </select>
              <button class="btn btn-primary">
                <i class="fa fa-search"></i> 
              </button>
            </div>
          </form>
          <div class="instant-results">
                <ul class="list-unstyled result-bucket">
                  {
filteredSearch.map(el=>{
  var selectby=document.getElementById("select-"+classes[0]).value;

  if(selectby==="Users")return <li class="result-entry" data-suggestion="Target 1" data-position="1" data-type="type" data-analytics-type="merchant">
  <a href=" " class="result-link">
    {el.user}
  </a>
  <p>{el.title}</p>
</li>
  else if(selectby==="Competitions")return <li class="result-entry" data-suggestion="Target 1" data-position="1" data-type="type" data-analytics-type="merchant">
  <a href=" " class="result-link">
    {el.title}
  </a>
</li>
  else if(selectby==="Organisations")
  return <li class="result-entry" data-suggestion="Target 1" data-position="1" data-type="type" data-analytics-type="merchant">
  <a href=" " class="result-link">
    {el.orgName}

  </a>
  <p>{el.title}</p>
</li>
 
                  }
)
                }

                </ul>
            </div>
        </div> 
        
      </div> 
    </div> 
  </section> 
</header> 

    </>
  )
}

export default Navbar



