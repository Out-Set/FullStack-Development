// Event Handling
// When we need to pass args to fun
import React, { Component } from 'react';

export default class App extends Component {
    state={
        id:10
    }

    show=(item)=>{
        console.log(item+": called");
    }
  render() {
    return (
      <>
        <h1>App Class Component</h1>
        <button onClick={()=>{this.show('mobile')}}>mobile</button>
        <button onClick={()=>{this.show('laptop')}}>laptop</button>
        <button onClick={()=>{this.show('desktop')}}>desktop</button>
      </>
    );
  }
}



// Event Handling
// When we don't need to pass args to fun
/*
import React, { Component } from 'react';

export default class App extends Component {
    show=()=>{
        console.log("Bitton Clicked");
    }
  render() {
    return (
      <>
        <h1>App Class Component</h1>
        <button onClick={this.show}>Click</button>
      </>
    );
  }
}
*/



// state with constructor
/*
import React, { Component } from 'react';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"amit",
            age:40,
            sroll:this.props.roll
        }
    }
  render() {
    return (
        <>
            <h2>App Class Component</h2>
            <h3>Name={this.state.name} age={this.state.age} </h3>
            <h2>Roll no with props={this.props.roll}</h2>
            <h2>Roll no with state={this.state.sroll}</h2>
        </>
    );
  }
}
*/


// state without constructor
/*
import React, { Component } from 'react';
export default class App extends Component {

    state={
        name:"amit",
        age:40,
        sroll:this.props.roll
    }
  render() {
    return (
      <div>
        <>
            <h2>App Class Component</h2>
            <h3>Name={this.state.name} age={this.state.age} </h3>
            <h2>Roll no with props={this.props.roll}</h2>
            <h2>Roll no with state={this.state.sroll}</h2>
        </>
      </div>
    );
  }
}
*/
