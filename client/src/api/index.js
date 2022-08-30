import axios from 'axios';

const url = "http://localhost:3001/";

export async function fetchWords() {
    try {
        const response = await axios.get(`${url}words`);

        return response.data
    } catch (error) {
        console.error(error);
    }
}

export async function createRank(score) {
    try {
        const response = await axios.post(`${url}rank`, score,{
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data
    } catch (error) {
        console.error(error);
    }
}
