import { Button, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './AddReviews.css';

const AddReviews = () => {
    const [value, setValue] = React.useState(2);
    const { user } = useAuth()

    const nameRef = useRef()
    const driscriptionRef = useRef()


    const handleAddReviews = e => {
        const name = nameRef.current.value;
        const driscription = driscriptionRef.current.value;
        const newProddactAdd = { name: name, driscription: driscription, value, user }

        // console.log(newProddactAdd)


        fetch("https://young-river-12633.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProddactAdd)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data)  
            })
        e.preventDefault()
    }




    return (
        <div>
            <form onSubmit={handleAddReviews}>
                <Box  >
                    <input sx={{ width: '75%', m: 1 }} type="text" className="form-control text-filed" ref={nameRef} id="formGroupExampleInput2" placeholder="Your Name" />
                </Box>

                <Box  >
                    <textarea sx={{ width: '75%', m: 1 }}
                        name="" className="form-control text-filed" ref={driscriptionRef} id="formGroupExampleInput2" cols="10" rows="3" placeholder="Your Comment"></textarea>
                </Box>
                <Box>
                    <Typography component="legend">Your Rating</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Submit</Button>
            </form>


        </div>
    );
};

export default AddReviews;