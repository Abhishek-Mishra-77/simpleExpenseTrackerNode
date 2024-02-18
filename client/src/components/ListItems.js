import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';

const ListItems = ({ expenseData, removeExpenseHandler, editExpenseHandler }) => {

    return (
        <div className='container'>
            <h1>Your <p>PopX Expenses</p> </h1>
            <div className='list__page'>
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Remove</TableCell>
                                <TableCell align="right">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {expenseData?.map((data) => (
                                <TableRow
                                    key={data.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {data.product}
                                    </TableCell>
                                    <TableCell align="right">{data.amount}</TableCell>
                                    <TableCell align="right">{data.description}</TableCell>
                                    <TableCell align="right">{data.category}</TableCell>
                                    <TableCell onClick={() => removeExpenseHandler(data.id)} align="right"> <DeleteOutlineIcon /></TableCell>
                                    <TableCell onClick={() => editExpenseHandler(data.id)} align="right"> <EditNoteIcon /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    )
}

export default ListItems