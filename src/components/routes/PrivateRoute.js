import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

export const PrivateRoute = ({children}) => {
    const {user} = useContext(UserContext)

    return user.name 
        ? children
        : <Navigate to="/login"/>
}
