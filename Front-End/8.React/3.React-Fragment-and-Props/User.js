export default function App(props){
    console.log(props.name, props.age);
    return(
        <>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
        </>
        
    )
}

/*
import React,{Component} from "react";
class App extends Component {
  render(){
    return(
      <>
        <h2>Class Component</h2>
        <h1>Good Evening</h1>
        <button>Click Me</button>
      </>
    )
  }
}
export default App
*/

/*
function User(){
    return(
        <>
            <h1>User Component</h1>
            <h1>Hello User</h1>
            <button>Click me</button>
        </>
        
    )
}
export default User
*/