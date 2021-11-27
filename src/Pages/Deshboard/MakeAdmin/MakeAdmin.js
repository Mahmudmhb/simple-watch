import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handleOnBlure = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }

        fetch('https://young-river-12633.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    console.log(data)
                    setEmail('')
                    setSuccess(true)
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin </h2>
            <form onSubmit={handleAdminSubmit} >
                <TextField
                    sx={{ width: "50%" }}
                    label="email"
                    type="email"
                    onBlur={handleOnBlure}
                    variant="standard" />

                <Button type="submit" variant="contained">Make Admin</Button>

            </form>
            {success && <Alert severity="success">

                This is a successfully Add New Admin   — <strong> Admin!!</strong>
            </Alert>}
        </div>
    );
};

export default MakeAdmin;