import React from 'react'
import { Link } from 'react-router-dom'
function NewsItem(props) {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={props.idata} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.dec}</p>
            <Link to={props.url} className='btn btn-primary'>More News</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default NewsItem