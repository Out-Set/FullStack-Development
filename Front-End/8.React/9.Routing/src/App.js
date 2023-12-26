// With BootStrap and <Link to=""><Link/>

import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Home/>
          <Routes>
            <Route path='/' element={<h2>Home Page</h2>}/>
            <Route path='/about' element={<h2>About Page</h2>}/>
            <Route path='/news' element={<h2>New Data Page</h2>}/>
            <Route path='*' element={<h2>404 page not found</h2>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}



// With <Link to=""><Link/>; Recommended
/*
import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Link to='/'>Home</Link><br/>
        <Link to='/about'>About</Link><br/>
        <Link to='/news'>news</Link><br/>
          <Routes>
            <Route path='/' element={<h2>Home Page</h2>}/>
            <Route path='/about' element={<h2>About Page</h2>}/>
            <Route path='/news' element={<h2>New Data Page</h2>}/>
            <Route path='*' element={<h2>404 page not found</h2>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
*/


// With <a><a/> tag: Not recommended
/*
import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <a href='/'>Home</a><br/>
        <a href='/about'>About</a><br/>
        <a href='/news'>news</a><br/>
          <Routes>
            <Route path='/' element={<h2>Home Page</h2>}/>
            <Route path='/about' element={<h2>About Page</h2>}/>
            <Route path='/news' element={<h2>New Data Page</h2>}/>
            <Route path='*' element={<h2>404 page not found</h2>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
*/

// Simple Routing
/*
import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<h2>Home Page</h2>}/>
            <Route path='/about' element={<h2>About Page</h2>}/>
            <Route path='/news' element={<h2>New Data Page</h2>}/>
            <Route path='*' element={<h2>404 page not found</h2>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
*/
