import React from 'react'

export const MessageBar = ({message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            { message }
        </div>
    )
}
