import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class Menu extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-warning">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/read">Read</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">Create</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/update/2">Update</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">Search</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </>
    )
  }
}
