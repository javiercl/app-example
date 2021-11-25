import React from 'react'

export const MessageBar = ({message}) => {
    return (
        <div class="alert alert-danger" role="alert">
            { message }
        </div>
    )
}
