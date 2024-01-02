import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
function News() {
  let [ndata, setndata] = useState([])
  useEffect(() => {
    var result = axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=15738bcdc8be45f4becb17702913a70d`)
    // console.log(result);
    result.then((res) => {
      console.log(res.data.articles);
      setndata(res.data.articles)
    })
  },[])
  return (
    <>
      <h2>News Data</h2>
      {ndata ? <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {ndata.map((item) => {
          return (
            <NewsItem
              title={item.title}
              dec={item.description}
              idata={item.urlToImage}
              url={item.url}

            />
          )
        })}
      </div> : <p>No data</p>}
    </>
  )
}

export default News