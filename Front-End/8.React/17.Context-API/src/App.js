// 2nd Way, With seperate ContextData.js file

import React from 'react'
import User from './User'
import { Provider } from './ContextData'
function App() {
  let data = "Hari lal"
  return (
    <>
      <h2>App function component</h2>
      <hr />
      <Provider value={data}>
        <User />
      </Provider>
    </>
  )
}

export default App


// 1st Way, Without seperate ContextData.js file
/*
import React from 'react'
import User from './User';

export let contextData = React.createContext()
function App() {
  let data = "amit"; //pass it to Admin Component
  return (
   <>
    <h2>App Component</h2>

    <contextData.Provider value={data}>
      <User/>
    </contextData.Provider>
   </>
  )
}

export default App
*/