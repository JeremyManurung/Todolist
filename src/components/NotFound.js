import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>Oops! Something Went Wrong</h1>
            <Link to="/"><button>Return To Home</button></Link>
        </div>
    )
}

export default NotFound
