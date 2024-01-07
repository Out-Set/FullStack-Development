// 2nd Way, With seperate ContextData.js file

import React from 'react'
import { Consumer } from './ContextData'
function Admin() {
  return (
    <>
      <h2>Admin called</h2>
      <Consumer>
        {val => <h3>Name={val}</h3>}
      </Consumer>
    </>
  )
}

export default Admin



// 1st Way, Without seperate ContextData.js file
/*
import React from 'react';
import {contextData} from './App'

function Admin() {
  return (
    <>
        <h2>Admin Component</h2>
        <contextData.Consumer>
            {da=><h2>Name={da.name}, Age={da.age}</h2>}  
            // da can be anything, it is just a name to receive value like we do in normal functions
        </contextData.Consumer>
    </>
  );
}

export default Admin;
*/