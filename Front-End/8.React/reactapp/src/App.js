import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: '',
    password: ''
  }
  show = (e) => {
    this.setState({ name: e.target.value })
  }
  show2 = (e) => {
    this.setState({ password: e.target.value })
  }
  render() {
    return (
      <>
        <form name="frm">
          Name:
          <input type="text" name="name" onChange={this.show} />
          <br /><br />
          Password:
          <input type="password" name="password" onChange={this.show2} />
        </form>
        
        <p>name={this.state.name}</p>
        <p>Password={this.state.password}</p>
      </>
    )
  }
}
