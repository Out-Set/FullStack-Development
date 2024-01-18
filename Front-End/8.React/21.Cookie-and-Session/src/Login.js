import React, { useState } from 'react'

function Login({ fdata }) {
  let [username, setusername] = useState("")
  let [pass, setpass] = useState("")
  let userSubmit = (e) => {
    e.preventDefault()
    fdata({ username, pass })
  }
  return (
    <>
      <form onSubmit={userSubmit}>
        Name:
        <input type="text" name="uname"
          onChange={(e) => { setusername(e.target.value) }} />
        <br /><br />
        Pass:
        <input type="password" name="pass"
          onChange={(e) => { setpass(e.target.value) }} />
        <br /><br />
        <input type="Submit" name="Sub" />
      </form>



    </>
  )
}

export default Login