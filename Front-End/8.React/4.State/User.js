// class based
import React,{Component} from "react";
export default class User extends Component {
  render(){
    return(
      <>
        <img src={this.props.img} height="100px" width="120px" alt="..."/>
        <h3>User-{this.props.name}</h3>
        <p>Roll-{this.props.roll}</p>
      </>
    )
  }
}


// functio based 
/*
function User(props){
  return(
    <>
      <h3>User Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </>
  )
}
export default User
*/