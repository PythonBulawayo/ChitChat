import React, { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:9000/api/profiles/')
            .then(response => response.json())
            .then(data => setUsers(data));

    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UsersList;