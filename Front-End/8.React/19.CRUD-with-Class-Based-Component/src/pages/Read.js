import React, { Component } from 'react'
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom"
export default class Read extends Component {
  constructor() {
    super()
    this.state = {
      list: null
    }
  }

  getalldata() {
    fetch("http://localhost:3000/students").then((res) => {
      // console.log(res.json());
      res.json().then((result) => {
        // console.log(result);
        this.setState({ list: result })
      })
    })
  }

  componentDidMount() {
    this.getalldata()
  }


  delete = (sno) => {
    fetch("http://localhost:3000/students/" + sno, {
      method: "DELETE"
    }).then((res) => {
      res.json().then((result) => {

        window.location.href = "/read"
        this.getalldata()
      })
    })
  }



  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">roll</th>
              <th scope="col">age</th>
              <th scope="col">email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {this.state.list ? <tbody>
            {this.state.list.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.roll}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td><Link to={'/update/' + item.id}><FaEdit className='fs-2' /></Link></td>
                  <td><Link to={'/delete/' + item.id} onClick={() => { this.delete(item.id) }}><MdDeleteForever className='fs-1' /></Link></td>
                </tr>
              )
            })}
          </tbody> : <p>No data</p>}
        </table>
      </>
    )
  }
}
