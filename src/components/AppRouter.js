import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

import { NavBar } from './NavBar';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { PublicPage } from './PublicPage';
import { HomePage } from './HomePage';
import { RegisterPage } from './RegisterPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={ <PublicPage/> } />
                        <Route exact path="/home" element={ <HomePage/> } />
                        <Route exact path="/about" element={ <AboutPage/> } />
                        <Route exact path="/login" element={ <LoginPage/> } />                        
                        <Route exact path="/register" element={ <RegisterPage/> } />                        
                        <Route to="/" />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}