
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3002/user/get')
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

export default fetchData;