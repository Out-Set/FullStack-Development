// useEffect
import React,{useState, useEffect} from 'react';

function App() {

  let [no, setno] = useState(1)
  let [val, setval] = useState(100)

  let inc=()=>{
    setno(no=no+1)
  }

  let dec=()=>{
    setval(val=val-1)
  }

  useEffect(()=>{
    console.log("use effect called...");
  }, [val])

  return (
    <>
    <p>{no}</p>
      <button onClick={inc}>Increment</button>

      <p>{val}</p>
      <button onClick={dec}>Decrement</button>
    </>
  );
}

export default App;



// Form Submit and get value
/*
import React from 'react';

function App() {
  return (
    <d>
      <form onSubmit={submit}>
        Name: <input type='text' name='name'/>
      </form>
    </d>
  );
}

export default App;
*/


// Using only one function(i.e. show), to show name and pass
/*
import React,{useState} from 'react';

function App() {
  let obj= {
    name: '',
    password: ''
  }
  
  let [values, setvalues] = useState(obj)

  let show=(e)=>{
    let {name, value} = e.target;
    setvalues({
      ...values,
      [name]:value
    })
  }
  return (
    <>
      <form>
        <input type='text' name='name' onChange={show}/>
        <input type='password' name='name' onChange={show}/>
      </form>

      <p>Name: {values.name}</p>
      <p>Password: {values.password}</p>
    </>
  );
}

export default App;
*/


// show name and pass with different different function(i.e. showName() & showPassword())
/*
import React,{useState} from 'react';

function App() {

  let [name,setname] = useState('')
  let [password,setpassword] = useState('')

  let showName=(e)=>{
    name = e.target:setname
  }

  let showPassword=(e)=>{
    
  }

  return (
    <>
      <form>
        <input type='text' name='name' onChange={showName}/>
        <input type='text' name='name' onChange={showPassword}/>
      </form>

      <p>Name: {name}</p>
      <p>Password: {password}</p>
    </>
  );
}

export default App;
*/