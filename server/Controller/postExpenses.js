const express = require('express');
const router = express.Router();

const User = require('../models/UserData');


router.post('/post', async (req, res) => {
    try {
        const product = req.body.product;
        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category
        const data = await User.create({ product: product, amount: amount, description: description, category: category, })
        res.send(data)
    }
    catch (error) {
        res.status(500).json({
            error: error
        })
    }
})

module.exports = router;