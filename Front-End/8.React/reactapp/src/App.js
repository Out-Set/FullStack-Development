// 4.useEffect

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



// 3.Form Submit and get value
/*
import React, { useState } from 'react'

function App() {

  let submit = (e) => {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={submit}>
        Name:
        <input type="text" name="name" />
        <br /><br />
        Password:
        <input type="password" name="password" />
        <br /><br />
        <input type="submit" />
      </form>

    </>
  )
}

export default App
*/



// 2.Using only one function(i.e. show), to show name and pass
/*
import React, { useState } from 'react'

function App() {
  let obj = {
    name: '',
    password: ''
  }
  let [values, setvalues] = useState(obj)
  let show = (e) => {
    let { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value
    })
  }
  return (
    <>
      <form>
        Name:
        <input type="text" name="name" onChange={show} />
        <br /><br />
        Password:
        <input type="password" name="password" onChange={show} />

      </form>
      <p>{values.name}----{values.password}</p>
    </>
  )
}

export default App
*/




// 1.Show name and pass with different different function(i.e. showName() & showPassword())
/*
import React,{useState} from 'react';

function App() {

  let [name,setname] = useState('')
  let [password,setpassword] = useState('')

  let showName=(e)=>{
    setname(name=e.target.value)
  }

  let showPassword=(e)=>{
    setpassword(password=e.target.value)
  }

  return (
    <>
      <form>
      <br/>
        Name: <input type='text' name='name' onChange={showName}/><br/><br/>
        Password: <input type='password' name='password' onChange={showPassword}/><br/><br/>
      </form>

      <p>Name: {name}</p>
      <p>Password: {password}</p>
    </>
  );
}

export default App;
*/