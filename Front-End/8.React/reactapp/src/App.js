
// useState hook
import React,{} from 'react';
import { useState } from 'react';

function App() {

  let [data, setdata] = useState('amit')

  let fun=()=>{
    setdata("Hari Kumar")
  }

  return (
    <>
      <h2>Function Component</h2>
      <h2>Name = {data}</h2>
      <button onClick={fun}>Click</button>
    </>
  );
}

export default App;



// Increment and Decrement the value of 'n' in state with event handeling
/*
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    n:0
  }

  inc=()=>{
    this.setState({n:this.state.n+1})
  }

  dec=()=>{
    this.setState({n:this.state.n-1})
  }

  render() {
    return (
      <>
        <button onClick={this.dec}> - </button>
        <span> {this.state.n} </span>
        <button onClick={this.inc}> + </button>
      </>
    );
  }
}
*/



// Set state value with events(i.e. onClick...)
/*
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    name:"amit",
    age:20
  }

  show=()=>{
    this.setState({name:"sumit", age:40}) 
    // or individually, like below
    // this.setState({age:40})
  }

  render() {
    return (
      <>
        <h2>Name = {this.state.name}, Age = {this.state.age}</h2>
        <button onClick={this.show}>Click</button>
      </>
    );
  }
}
*/


// Event Handling with function based component
// When we need to pass args to fun
/*
import React from 'react';

function App() {
  let show=(items)=>{
    console.log(items,': called');
  }
  return (
    <>
      <h2>Function Component</h2>
      <button onClick={()=>{show('Moblie')}}>Mobile</button>
      <button onClick={()=>{show('Laptop')}}>Laptop</button>
      <button onClick={()=>{show('Desktop')}}>Desktop</button>
    </>
  );
}

export default App;
*/


// Event Handling with function based component
// When we don't need to pass args to fun
/*
import React from 'react';

function App() {
  let show=()=>{
    console.log('Button Clicked');
  }
  return (
    <>
      <h2>Function Component</h2>
      <button onClick={show}>Click</button>
    </>
  );
}

export default App;
*/