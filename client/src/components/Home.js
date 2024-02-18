import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import ListItem from './ListItems'
import externalApiServices from '../services/externalApiServices';
import fetchData from '../services/fetchData';
import removeExpense from '../services/removeExpense';
import editExpense from '../services/editExpense';

const Home = () => {

    const [expenseData, setExpenseData] = useState([]);
    const [editData, setEditData] = useState({});

    const expenseDataHandler = async (id, obj) => {
        if (id) {
            editExpense(id, obj);
            const updatedExpenseData = expenseData.map(expense => {
                if (expense.id === id) {
                    // If the expense ID matches the edited ID, update it with the new data
                    return {
                        id: expense.id,
                        product: obj.product,
                        amount: obj.amount,
                        description: obj.description,
                        category: obj.category
                    };
                } else {
                    return expense; // Keep unchanged expenses as they are
                }
            });
            id = ''
            setExpenseData(updatedExpenseData);
        }
        else {
            const data = await externalApiServices(obj);
            setExpenseData((prev) => [...prev, data]);
        }
    }


    // getting Data from backend  

    useEffect(() => {
        const dataHandler = async () => {
            const data = await fetchData();
            setExpenseData(data)
        }
        dataHandler()
    }, [])


    // removing Expense UI 
    const removeExpenseHandler = (id) => {
        removeExpense(id)
        setExpenseData((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id))
    }

    //  Editing Expense in backend and UI
    const editExpenseHandler = async (id) => {
        const findExpense = expenseData.find((expense) => expense.id === id)
        setEditData(findExpense)
    }

    return (
        <div>
            <Navbar />
            <div className='home__page'>
                <Form editData={editData} expenseDataHandler={expenseDataHandler} />
                <ListItem
                    expenseData={expenseData}
                    removeExpenseHandler={removeExpenseHandler}
                    editExpenseHandler={editExpenseHandler} />
            </div>
        </div>
    )
}

export default Home