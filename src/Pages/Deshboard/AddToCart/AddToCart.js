import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const AddToCart = () => {
    const { user } = useAuth();
    const [addToCarts, setAddToCarts] = useState([]);


    useEffect(() => {
        const url = `https://young-river-12633.herokuapp.com/handleAddToCarts?user.email?=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAddToCarts(data))
    }, [user.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://young-river-12633.herokuapp.com/handleAddToCarts/${id}`;
            // console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = addToCarts.filter(user => user._id !== id);
                        setAddToCarts(remainingUsers);
                    }
                })
        }

    }



    return (
        <div>
            <h2>hello welcome to add product{addToCarts.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Add To Cart Table table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                calories>BRAND</TableCell>
                            <TableCell align="right">MODEL</TableCell>
                            <TableCell align="right">PRICE</TableCell>
                            <TableCell align="right">ACTION</TableCell>
                            <TableCell align="right">REMOVED</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {addToCarts.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.company}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.balance}</TableCell>
                                <TableCell align="right"><Link to="/purchasePage"><Button>PAYMENT</Button></Link></TableCell>
                                <TableCell align="right"><Button onClick={() => handleDelete(row._id)}> <DeleteIcon /></Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AddToCart;