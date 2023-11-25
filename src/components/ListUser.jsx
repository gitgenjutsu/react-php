import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ListUser = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:80/api/user/save')
            .then(res => {
                setUserList(res.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);


    return (
        <div>
            <h2>User List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList?.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/user/${user.id}/edit`}>Edit</Link> &nbsp;
                                <Link to={''}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
