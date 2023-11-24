import React, { useState } from 'react'

export const CreateUser = () => {
    const [allInputs, setAllInputs] = useState({});
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAllInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(allInputs);
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
