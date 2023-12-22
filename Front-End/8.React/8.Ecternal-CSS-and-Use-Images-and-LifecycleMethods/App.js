// With Ternary operator
import React,{useState} from 'react';
import "./style.css"  // external CSS import
import pic from './s2.jpg'  // image from src

function App() {
  let [val, setVal] = useState(true)

  let show=()=>{
    setVal(val?false:true)
  }
  return (
    <>
      <h2 className={val?'data1':'data2'}>App Function Component</h2>
      <p className='data3'>jsdk  diuas 8e eu8nx98jxn xasu hxiash x</p>
      <p>jsdk  diuas 8e eu8nx98jxn xasu hxiasz zjhk sadu uias asiud i aisduh x</p>
      <button onClick={show}>Click to Change</button>
      <br/><br/>

      {/* image from src */}
      <img src={pic} height="150px" width="200px" alt='...'/>

      {/* image from public/image folder */}
      <img src='image/s3.jpg' height="150px" width="200px" alt='...'/>
    </>
  );
}

export default App;


// Normal
/*
import React from 'react';
import "./style.css"
function App() {
  return (
    <>
      <h2 className='data data2'>App Function Component</h2>
      <p className='data2'>jsdk  diuas 8e eu8nx98jxn xasu hxiash x</p>
      <p>jsdk  diuas 8e eu8nx98jxn xasu hxiasz zjhk sadu uias asiud i aisduh x</p>
    </>
  );
}

export default App;
*/
