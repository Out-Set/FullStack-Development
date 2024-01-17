import React, { Component } from 'react'

export default class Create extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      roll: null,
      age: null,
      email: null
    }
  }
  submit = () => {
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.json().then((result) => {

      })
    })
  }
  render() {
    console.log(this.state);
    return (
      <>
        <form>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" name="name" class="form-control" placeholder="enter name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
          </div>
          <div class="mb-3">
            <label class="form-label">Roll-</label>
            <input type="number" name="roll" class="form-control" placeholder="enter roll" onChange={(e) => { this.setState({ roll: e.target.value }) }} />
          </div>
          <div class="mb-3">
            <label class="form-label">Age-</label>
            <input type="number" name="age" class="form-control" placeholder="enter age" onChange={(e) => { this.setState({ age: e.target.value }) }} />
          </div>
          <div class="mb-3">
            <label class="form-label">Email-</label>
            <input type="email" name="email" class="form-control" placeholder="enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
          </div>
          <div class="mb-3">

            <input type="submit" name="sub" class="form-control bg-danger" onClick={this.submit} />
          </div>
        </form>

      </>
    )
  }
}
