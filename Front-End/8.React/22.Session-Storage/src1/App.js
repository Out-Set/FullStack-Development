import React from 'react'

function App() {
  let data1=()=>{
    sessionStorage.setItem("age",42)
  }
  let data2=()=>{
   let result= sessionStorage.getItem("age")
   console.log(result);
  }
  let data3=()=>{
    sessionStorage.removeItem("age")
  }
  return (
    <>
    <h2>App Component</h2>
    <button onClick={data1}>set Storage</button>
    <button onClick={data2}>Get Storage</button>
    <button onClick={data3}>Delete Storage</button>
    </>
  )
}

export default App