import React, { Component } from 'react'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchdata: null
    }
  }

  search = (key) => {
    let data = fetch("http://localhost:3000/students?name=" + key)
    // console.log(data);
    data.then((res) => {
      // console.log(res.json());
      res.json().then((val) => {
        this.setState({ searchdata: val })
      })
    })
  }
  render() {
    return (
      <>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="search data" onChange={(e) => { this.search(e.target.value) }} />
          <span className="input-group-text" id="basic-addon2"><button className='btn btn-outline-danger'>Search</button></span>
        </div>





        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">roll</th>
              <th scope="col">age</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          {this.state.searchdata ? <tbody>
            {this.state.searchdata.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.roll}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                </tr>
              )
            })}
          </tbody> : <p>No data</p>}


        </table>
      </>
    )
  }
}
