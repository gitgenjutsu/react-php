import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export const EditUser = ({ id }) => {
    const [allInputs, setAllInputs] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAllInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:80/api/user/save', allInputs).then(() => navigate('/'));
    };

    // useEffect(() => {
    //     axios.get(`http://localhost:80/api/user/${params.id}`)
    //         .then(res => {
    //             setUserList(res.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching user data:', error);
    //         });
    // }, [id]);

    return (
        <><div>Edit User</div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Name' type='text' name='name' onChange={handleOnChange} />
                <input placeholder='Email' type='email' name='email' onChange={handleOnChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
