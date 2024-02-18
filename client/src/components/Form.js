import React, { useState, useEffect } from 'react'
import { Stack, Button, TextField, InputLabel, MenuItem, Select } from '@mui/material'


const Form = ({ expenseDataHandler, editData }) => {

    const [product, setProduct] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (editData) {
            const { product, amount, description, category } = editData;
            setProduct(product || '');
            setAmount(amount || '');
            setDescription(description || '');
            setCategory(category || '');
        }
    }, [editData]);


    function formHandler(e) {
        e.preventDefault();
        const obj = {
            product,
            amount,
            description,
            category
        }
        expenseDataHandler(editData.id ? editData.id : '', obj)
        setProduct('')
        setAmount('')
        setDescription('')
        setCategory('')
    }


    return (
        <div className='container'>
            <form className='form' onSubmit={formHandler}>
                <Stack spacing={2} direction="column" className='p'>
                    <h1>Add your <p>PopX Expenses</p> </h1>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Product"
                        type='text'
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Amount"
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <MenuItem value='Need'>Need</MenuItem>
                        <MenuItem value='Want'>Want</MenuItem>
                        <MenuItem value='Investment'>Investment</MenuItem>
                    </Select>
                    <Button type='submit' style={{ backgroundColor: "#21b6ae" }} variant="contained">Add Expense</Button>
                </Stack>
            </form>
        </div>
    )
}

export default Form