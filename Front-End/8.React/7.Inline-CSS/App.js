// Inline CSS with ternary operator
/*
import React,{useState} from 'react';

function App() {
  let [val, setVal] = useState(true)
  let show=()=>{
    setVal(val?false:true)
  }
  let data1={background:"orange"}
  let data2={background:"red"}

  return (
    <>
      <h2 style={val?data1:data2}>App Componemt</h2>
      <button onClick={show}>Change Color</button>
    </>
  );
}

export default App;

*/


// Inline CSS

import React from 'react';

function App() {

  let data={
    background:"orange",
    fontSize:"40px"
  }

  let data2={
    textAlign:"center",
    color:"red"
  }

  return (
    <>
      <h2 style={data2}>App Componemt</h2>
      <p style={data}>lorem fd fdkj dsfkjfds sdkjsfd</p>
      <p style={{...data,...data2,textTransform:"uppserCase"}}>lorem fd fdkj dsfkjfds sdkjsfd</p>
    </>
  );
}

export default App;





// Playing b/w multiple components(App <-- User <-- Guest)
/*
import React,{ useState } from 'react';
import User from './User';

function App() {

  let [no, setno] = useState(5)

  let show=()=>{
    setno(no = no+1)
  }

  return (
    <>
      <h2>App Component</h2>
      <button onClick={show}>Increment</button>
      <hr/>
      <User uno={no}/>
    </>
  );
}

export default App;
*/