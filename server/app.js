const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const postExpenses = require('./Controller/postExpenses')
const getExpenses = require('./Controller/getExpenses')
const removeExpenses = require('./Controller/removeExpenses')
const editExpense = require('./Controller/editExpenses')

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());


app.use('/', postExpenses);
app.use('/user', getExpenses)
app.use('/user', removeExpenses)
app.use('/user', editExpense)


sequelize.sync()
    .then(() => {
        console.log('Info Table created successfully')
    })
    .catch((error) => {
        console.error('Error creating Info table:', error);
    })


app.listen(3002, () => {
    console.log('App started');
})