import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const [user, setUser] = useState({});

    const contextObject = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ contextObject }>
            <AppRouter />
        </UserContext.Provider>
    )
}