import React, { useState } from 'react'
import { AppRouter } from './routes/AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    const contextObject = {
        user,
        setUser,
    }

    //console.log(JSON.stringify(contextObject));

    return (
        <UserContext.Provider value={ contextObject }>
            <AppRouter />
        </UserContext.Provider>
    )
}