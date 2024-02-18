const removeExpense = async (id) => {
    try {
        const response = await fetch(`http://localhost:3002/user/remove/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}


export default removeExpense;