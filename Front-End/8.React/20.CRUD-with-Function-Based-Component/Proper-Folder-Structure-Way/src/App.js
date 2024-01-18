import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./comman/Header"
import Menu from "./comman/Menu"
import Footer from "./comman/Footer"
import Home from "./pages/Home"
import Read from "./pages/Read"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Search from "./pages/Search"
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<Read />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    ) 
  }
}
