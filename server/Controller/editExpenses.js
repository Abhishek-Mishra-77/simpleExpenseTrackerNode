const express = require('express');
const router = express.Router();
const User = require('../models/UserData');

router.put('/edit/:id', async (req, res) => {
    const updatedExpense = req.body
    const { id } = req.params
    try {
        const expense = await User.update(
            { product: updatedExpense.product, amount: updatedExpense.amount, description: updatedExpense.description, category: updatedExpense.category },
            { where: { _id: id } }
        );
        if (!expense) {
            return res.status(404).json({ error: 'Expense Not Found' });
        }
        res.json(expense)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;