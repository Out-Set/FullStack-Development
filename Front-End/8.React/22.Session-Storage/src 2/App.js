import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
function App() {
  let{loginWithPopup,loginWithRedirect,logout,isAuthenticated,user}=useAuth0()
  return (
    <>
    <h2>App</h2>
    <button onClick={loginWithPopup}>Login with Pop</button>
    <button onClick={loginWithRedirect}>Login with Redirect</button>
    <button onClick={logout}>logout</button>
    <div>
      {isAuthenticated?user.name+"-login":"logout user"}
    </div>
    
    </>
  )
}

export default App