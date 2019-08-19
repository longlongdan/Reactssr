import fetch from 'node-fetch';

import { secret } from '../config';
import { addParam } from '../components/Url';

const baseUrl = 'http://47.95.113.63/ssr';
const fetchServer = req => {
    return (url) => {
        url = addParam(baseUrl+url, 'secret', secret);
        return fetch(url,{
            headers: {
                'Cookie': req.get('Cookie') || ''
            }
        });
    }
}
export default  fetchServer;