import { Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import './../AddReviews/AddReviews.css'

const AddProducts = () => {
    const [value, setValue] = React.useState(2);

    const nameRef = useRef()
    const numberRef = useRef()
    const driscriptionRef = useRef()
    const imgRef = useRef()
    const handlemenu = e => {
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const driscription = driscriptionRef.current.value;
        const image = imgRef.current.value;
        const newProduct = { name: name, balance: number, company: driscription, picture: image, rating: value }
        console.log(newProduct)
        fetch('https://young-river-12633.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json)
            .then(data => {
                if (data.insertedId) {
                    alert('add menu succssesfully')
                    e.target.reset();
                }
            })

        e.preventDefault()
    }
    return (
        <Grid>

            <Container sx={{ py: 5, mx: 'auto' }}>

                <form onSubmit={handlemenu}>

                    <div class="mb-3">
                        {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
                        <input type="text" class="form-control text-filed" ref={nameRef} id="formGroupExampleInput" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                        <input type="number" class="form-control text-filed" ref={numberRef} id="formGroupExampleInput2" placeholder="Price" />
                    </div>
                    <div class="mb-3">
                        {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                        <input type="url" class="form-control text-filed" ref={imgRef} id="formGroupExampleInput2" placeholder="Image-Url" />
                    </div>
                    <div class="mb-3">
                        {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                        <textarea name="" class="form-control text-filed" ref={driscriptionRef} id="formGroupExampleInput2" cols="10" rows="3" placeholder="Driscription"></textarea>
                    </div>
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



                    <button type="submit" class="btn btn-primary text-filed">ADD PRODUCT</button>
                </form>
            </Container>
        </Grid>
    );
};

export default AddProducts;