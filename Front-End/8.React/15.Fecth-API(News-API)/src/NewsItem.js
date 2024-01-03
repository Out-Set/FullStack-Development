import React from 'react'
import pic from "./noimage.png"
function NewsItem(props) {
  let h = {
    height: "550px"
  }
  return (
    <>
      <div className="col" >
        <div className="card" style={h}>
          <img src={props.idata ? props.idata : pic} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.des}</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default NewsItem