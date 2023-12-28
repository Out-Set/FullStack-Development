import React from 'react'
import { Link } from "react-router-dom"
import Home from './Home';
import './style.css'

function Menu() {
    return (
        <>  
            <div className='header'>
                <div className='logo'>
                    <img src='image/logo.png' height='50px' width='50px' alt='logo' />
                    <h4>Welcome to My Demo Project</h4>
                </div>

                <div className='nav'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/post">Post</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/post/mobile">Postmobile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/post/tv">PostTv</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/news">News</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Menu