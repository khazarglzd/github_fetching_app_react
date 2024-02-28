import React, { useState, useEffect } from 'react'
import UsersContainer from '../components/UsersContainer';

const Users = () => {

    const [users, setUsers] = useState([])

    let BaseUrl = "https://api.github.com/users";

    async function AllUsers() {
        const response = await fetch(BaseUrl);
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        AllUsers()
    }, [setUsers])

    return (
        <div>
            <UsersContainer users={users} />
        </div>
    )
}

export default Users