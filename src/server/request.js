import fetch from 'node-fetch'

const baseUrl = 'http://47.95.113.63/ssr';
const fetchServer = (url) => {
    return fetch(baseUrl+url);
}
export default  fetchServer;