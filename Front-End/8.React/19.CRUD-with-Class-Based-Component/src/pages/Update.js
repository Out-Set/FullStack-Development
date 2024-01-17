import React, { Component } from 'react'
import withRouter from './withRouter'
class Update extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      roll: null,
      age: null,
      email: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/students/" + this.props.params.id).then((res) => {
      res.json().then((result) => {
        this.setState({ name: result.name, roll: result.roll, age: result.age, email: result.email })
      })
    })
  }

  update = (sno) => {
    fetch("http://localhost:3000/students/" + sno, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.json().then((result) => {
        window.location.href = "/read"
      })
    })
  }


  render() {
    console.log(this.props.params.id);
    return (
      <>
        <form>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" name="name" class="form-control" placeholder="enter name"
              value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
          </div>
          <div class="mb-3">
            <label class="form-label">Roll-</label>
            <input type="number" name="roll" class="form-control" placeholder="enter roll"
              value={this.state.roll} onChange={(e) => { this.setState({ roll: e.target.value }) }} />
          </div>
          <div class="mb-3">
            <label class="form-label">Age-</label>
            <input type="number" name="age" class="form-control" placeholder="enter age"
              value={this.state.age} onChange={(e) => { this.setState({ age: e.target.value }) }} />
          </div>
          <div class="mb-3">
            <label class="form-label">Email-</label>
            <input type="email" name="email" class="form-control" placeholder="enter email"
              value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
          </div>
          <div class="mb-3">

            <input type="submit" name="sub" class="form-control bg-danger" value="Update"
              onClick={() => { this.update(this.props.params.id) }} />
          </div>
        </form>

      </>
    )
  }
}

export default withRouter(Update)