// With BootStrap and <Link to=""><Link/>

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './Menu';
import Home from './Home';
import About from './About';
import News from './News';
import Footer from './Footer';

import Layout from './Layout';

import Java from './Java';
import Html from './Html';
import Php from './Php';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path="/services" element={<Layout />}>
              <Route index element={<Layout />} />
              <Route path="html" element={<Html />} />
              <Route path="php" element={<Php />} />
              <Route path="java" element={<Java />} />
            </Route>

            <Route path='/news' element={<News />} />
            <Route path='*' element={<h2>404 page not found</h2>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

