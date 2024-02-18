
const externalApiServices = async (obj) => {
    try {
        const response = await fetch('http://localhost:3002/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product: obj.product,
                amount: obj.amount,
                description: obj.description,
                category: obj.category
            })
        })
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error)
    }
}


export default externalApiServices;