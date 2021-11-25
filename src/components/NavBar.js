import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
//import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    const { user, setUser } = useContext(UserContext);

    let navigate = useNavigate();

    const handleCerrar = () => {
        setUser({});
        localStorage.removeItem("sesion");
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                {
                user.name ? (
                    <>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink  className="nav-link" to="/home">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-nav dropdown animate__animated animate__fadeIn" >
                        <button type="button" className="btn btn-link nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">{user.usuario}</button>
                        {/*<a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            {user.usuario}
                        </a>*/}
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <button className="dropdown-item"
                                    onClick={handleCerrar}
                                >Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    </span>
                    </>
                ):(
                    <>
                    <ul className="navbar-nav">
                    </ul>
                    <div className="animate__animated animate__fadeIn">
                        <button type="button" className="btn btn-primary" onClick={()=>{navigate("/register")}}>Sign Up</button>
                        <span> </span>
                        <button type="button" className="btn btn-success" onClick={()=>{navigate("/login")}}>Log In</button>
                    </div>
                    </>
                )
                }
               </div>
            </div>
        </nav>
    )
}