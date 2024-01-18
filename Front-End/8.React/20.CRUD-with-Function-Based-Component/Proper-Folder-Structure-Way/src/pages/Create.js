import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Create() {

  let [user, setuser] = useState([])
  let [name, setname] = useState()
  let [roll, setroll] = useState()
  let [age, setage] = useState()
  let [email, setemail] = useState()
  
  useEffect(() => {
    axios.get('http://localhost:3000/students').then((res) => {
      setuser(res.data);
    });
  }, []); // Provide an empty dependency array to run the effect only once
  

  let submituser = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/students/", {
      name, roll, age, email
    }).then((res) => {
      console.log(res.data);
    })
  }

  return (
    <>
      <div>
        <h2 className='p-3 bg-warning text-center'>Add New User</h2>
        <form onSubmit={submituser}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" name='name' class="form-control" placeholder="enter name"
              onChange={(e) => { setname(e.target.value) }} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">roll no</label>
            <input type="number" name='roll' class="form-control" placeholder="enter roll"
              onChange={(e) => { setroll(e.target.value) }} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">age</label>
            <input type="number" name='age' class="form-control" placeholder="enter age"
              onChange={(e) => { setage(e.target.value) }} />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">email</label>
            <input type="email" name='email' class="form-control" placeholder="name@example.com"
              onChange={(e) => { setemail(e.target.value) }} />
          </div>
          <div class="mb-3">

            <input type="submit" name='sub' class="form-control bg-danger" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
