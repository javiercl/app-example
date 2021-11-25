import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { AboutPage } from '../AboutPage'

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={ <HomePage/> } />                        
            <Route path="about" element={ <AboutPage/> } />                        
            <Route path="*" element={ <HomePage/> } />                        
        </Routes>
    )
}
