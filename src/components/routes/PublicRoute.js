import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

export const PublicRoute = ({children}) => {
    const {user} = useContext(UserContext)

    console.log(user);
    return !user.name 
        ? children
        : <Navigate to="/home"/>
}
