import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className='alfa'>Colour</span><span className='syne'>Color</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">{props.isUk ? "Colours" : "Colors"}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Add</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
    )
}

