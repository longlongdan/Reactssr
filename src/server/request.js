import fetch from 'node-fetch';

const baseUrl = 'http://47.95.113.63/ssr';
const fetchServer = req => {
    return (url) => {
        return fetch(baseUrl+url,{
            headers: {
                'Cookie': req.get('Cookie') || ''
            }
        });
    }
}
export default  fetchServer;