import React from 'react'
import { useLocation } from "react-router-dom"

const UserInfo = () => {

    const { pathname } = useLocation()

    return (
        <div>{pathname}</div>
    )
}

export default UserInfo