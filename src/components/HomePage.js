import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomePage = () => {
    const { user } = useContext(UserContext);

    console.log( user );

    return (
        <div>
            <h1>Bienvenido a la página privada</h1>
            <hr />
        </div>
    )
}