import fetch from 'node-fetch';

const baseUrl = '';
const  fetchClient = (url) => {
    return fetch(baseUrl+url);
}
export default fetchClient;