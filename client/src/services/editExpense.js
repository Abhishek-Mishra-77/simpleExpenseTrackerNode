const editExpense = async (id, updatedData) => {
    const response = await fetch(`http://localhost:3002/user/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product: updatedData.product,
            amount: updatedData.amount,
            description: updatedData.description,
            category: updatedData.category
        })
    });
    const data = await response.json();
    console.log(data)
};

export default editExpense;