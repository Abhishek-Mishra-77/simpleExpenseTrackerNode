const express = require('express')
const router = express.Router();
const User = require('../models/UserData')

router.delete('/remove/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleteUser = await User.destroy({
            where: {
                id: id
            }
        })
        if (deleteUser === 0) {
            res.status(404).send(`User with ID ${id} is Not Found`)
            return;
        }
        res.status(200).send(`User with ID ${id} deleted successfully`);
    }
    catch (error) {
        res.status().send('Error deleting data with ID', id)
    }
})


module.exports = router;