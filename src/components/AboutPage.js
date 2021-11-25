import React, { useContext } from 'react'
import { UserContext } from './UserContext'



export const AboutPage = () => {
    const { user} = useContext( UserContext );

    return (
        <div>
            <h1>AboutPage</h1>
            <hr />
            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

        </div>
    )
}