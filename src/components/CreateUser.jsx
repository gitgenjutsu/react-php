import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {
    const [allInputs, setAllInputs] = useState({});
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAllInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:80/api/user/save', allInputs).then(() => navigate('/'));
    }
    return (
        <>
            <div>CreateUser</div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Name' type='text' name='name' onChange={handleOnChange} />
                <input placeholder='Email' type='email' name='email' onChange={handleOnChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
