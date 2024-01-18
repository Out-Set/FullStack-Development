import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom"

function Read() {

  let [user, setuser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/students').then((res) => {
      setuser(res.data);
    });
  }, []); // Provide an empty dependency array to run the effect only once

  let deleteuser = (sno) => {
    axios.delete("http://localhost:3000/students/" + sno).then((res) => {
      console.log(res.data);
    })
  }

  return (
    <>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Roll</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {user ? <tbody>
          {user.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.RollNo}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td><button className='btn btn-info'>Edit</button></td>
                <td><button className='btn btn-danger' onClick={() => { deleteuser(item.id) }}>Delete</button></td>
              </tr>
            )
          })}
        </tbody> : <p>no data</p>}
      </table>
      </>
  );
}

export default Read;

