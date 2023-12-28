import React from 'react'
import {useParams} from "react-router-dom"
function Post() {
   let{category} =useParams()
  return (
    <>
    <h2>Post Component</h2>
    <p>category name={category}</p>
    </>
  )
}

export default Post