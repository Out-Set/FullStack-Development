import React from 'react'
import Welcome from './Welcome'
import Login from './Login'
import { CookiesProvider, useCookies } from "react-cookie"
function App() {
  let [cookie, setcookie] = useCookies([])

  let changeData = (user) => {
    setcookie("cuser", user, { path: "/" })
  }


  return (
    <>
      <h2>App component</h2>
      <CookiesProvider>
        {cookie.cuser ? <Welcome user={cookie.cuser} /> : <Login fdata={changeData} />}


      </CookiesProvider>
    </>
  )
}

export default App