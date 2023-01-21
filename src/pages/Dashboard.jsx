import React from 'react'
import Filterbar from '../components/dashboard/Filterbar'
import ItemContainer from '../components/dashboard/ItemContainer'

const dashboard = () => {
  return (
    <>
    <section className="bg-primary py-5">
    <div className="container">
        <h2 className="text-white">Men's wear</h2>
      <ol className="breadcrumb ondark mb-0">
        <li className="breadcrumb-item"><a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#">Home</a></li>
        <li className="breadcrumb-item"><a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </div>
    </section>
    <section className="padding-y">
<div className="container">
<div className="row">
<Filterbar></Filterbar>
{/* <ItemContainer></ItemContainer> */}
</div>
</div>
</section>
    
    </>
  )
}

export default dashboard