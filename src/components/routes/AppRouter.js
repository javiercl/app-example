import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

import { NavBar } from '../NavBar';
import { LoginPage } from '../LoginPage';
import { PublicPage } from '../PublicPage';
import { RegisterPage } from '../RegisterPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={ <PublicPage/> } />
                        <Route exact path="/login" element={ 
                            <PublicRoute>
                                <LoginPage/> 
                            </PublicRoute>
                          } 
                        />                        
                        <Route exact path="/register" element={ 
                            <PublicRoute>
                                <RegisterPage/> 
                            </PublicRoute>
                          } 
                        />                        
                        <Route path="/*" element={
                            <PrivateRoute>
                                <DashboardRoutes/>
                            </PrivateRoute>
                          }
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}