import axios from 'axios';

const url = 'https://iconnect-mern-test.herokuapp.com/api';
export const addCompany = async (company) => {
        return await axios.post(`${url}/create`, company)
}

export const getCompanies = async () => {
    try {
        return await axios.get(`${url}/getCompanies`);
    } catch (error) {
        console.log(error.message);
    }
}