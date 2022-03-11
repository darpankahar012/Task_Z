import React from 'react'
import { useHistory, useLocation } from "react-router-dom";

function Header(props) {
    const history = useHistory();
    const location = useLocation();
    return (
        <>
            <header className="home">
                <nav className="navbar navbar-expand-lg" id="myHeader">
                    <div className="container">
                        <a className="navbar-brand" onClick={() => history.push("/")}><img src="../asset/images/logo.png" alt="Index" title="Index" /></a>
                        <button id="navIcon" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="collapse navbar-collapse offcanvas-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className={location.pathname === "/" ? "nav-item active" : "nav-item"}><a onClick={() => history.push("/")} className="nav-link" >About</a></li>
                                <li className={location.pathname === "/privacy" ? "nav-item active" : "nav-item"}><a onClick={() => history.push("/privacy")} className="nav-link" >Privacy</a></li>
                                <li className="nav-item"><a onClick={() => history.push("/ref")} className="nav-link" >Terms & Conditions</a></li>
                                <li className="nav-item"><a className="nav-link" >Singup</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header