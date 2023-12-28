import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './Menu';
import Home from './Home';
import About from './About';
import News from './News';
import Footer from './Footer';
import Post from './Post';


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/post' element={<Post/>}/>
            <Route path='/post/:category' element={<Post/>}/>

            <Route path='/news' element={<News />} />
            <Route path='*' element={<h2>404 page not found</h2>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }
}

