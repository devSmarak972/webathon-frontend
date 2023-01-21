import React from 'react'

const Article = ({filter}) => {
    console.log(filter);
    var list=filter.item.map((el)=>{
        return <li key={el}><a href="">{el} </a></li>;
     })
     console.log(list);
  return (
    <div className="filter-group">
    <header className="card-header">
      <a href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/page-items-list.html#" className="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside1">
        <i className="icon-control fa fa-chevron-down"></i>
        {filter.header}
      </a>
    </header>
    <div className="collapse show" id="collapse_aside1">
      <div className="card-body">
        <ul className="list-menu">
            {
              list
          }

        </ul>
      </div>
    </div>
  </div> 
  )
}

export default Article