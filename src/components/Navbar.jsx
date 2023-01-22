import React from 'react'

const Navbar = () => {
const MouseOver=(e)=>{
  e.target.style.background = '#0d6efd';
}
const MouseOut=(e)=>{
  
  e.target.style.background = '#0d85fd';
}
  return (
    <>
      
<header class="section-header">	
	<section class="header-main">
    <div class="container">
      <div class="row gy-3 align-items-center">
        <div class="col-lg-2 col-sm-4 col-4">
          <a href="http://bootstrap-ecommerce.com/" class="navbar-brand">
            <img class="logo" height="40" src="https://www.pngfind.com/pngs/m/107-1079961_iit-kharagpur-logo-hd-png-download.png"/>
          </a>
        </div>
        <div class="order-lg-last col-lg-5 col-sm-8 col-8">
          <div class="float-end">
            <a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" class="btn btn-light ms-5"> 
                <i class="fa fa-user"></i>  <span class="ms-1 d-none d-sm-inline-block">My Profile  </span> 
            </a>
            <a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" class="btn btn-light ms-1"> 
              <i class="fa fa-heart"></i>  <span class="ms-1 d-none d-sm-inline-block">Bookmarks</span>   
            </a>

            <a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" class="btn btn-light ms-5" style={{backgroundColor: " #0d85fd  ",border:'1px', color:'white'}} > 
              <i class="fa fa-trophy" style={{color: '#FFD700'}}></i>  <span class=" ms-1 d-none d-sm-inline-block">Post Competions</span>   
            </a>

              </div>
        </div> 
        <div class="col-lg-5 col-md-12 col-12">
          <form action="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" class="">
            <div class="input-group">
            <input type="search" class="form-control" style={{width:"55%"}} placeholder="Search"/>
              <select class="form-select">
                <option value="">All type</option>
                <option value="codex">Special</option>
                <option value="comments">Only best</option>
                <option value="content">Latest</option>
              </select>
              <button class="btn btn-primary">
                <i class="fa fa-search"></i> 
              </button>
            </div>
          </form>
        </div> 
        
      </div> 
    </div> 
  </section> 
</header> 

    </>
  )
}

export default Navbar



