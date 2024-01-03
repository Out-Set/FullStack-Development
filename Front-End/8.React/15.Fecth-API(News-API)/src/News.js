import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
function News(props) {
    let [item, setitem] = useState([])
    let data = () => {
        var res = axios.get(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
        // console.log(res);
        res.then((resp) => {
            // console.log(resp.data.articles);
            setitem(resp.data.articles)
        })
    }
    useEffect(() => {
        data()
    }, [props.category])
    return (
        <>
            <h2>News data</h2>
            {item ? <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {item.map((pro) => {
                    return (
                        <NewsItem
                            title={pro.title}
                            idata={pro.urlToImage}
                            des={pro.description}
                            url={pro.url}
                        />
                    )
                })}
            </div> : <p>no data</p>}
        </>
    )
}

export default News