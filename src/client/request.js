import { secret } from '../config';
import { addParam } from '../components/Url';
const baseUrl = '';
const  fetchClient = (url) => {
    url = addParam(baseUrl+url, 'secret', secret);
    return fetch(url,{
        credentials: 'include',
    });
}
export default fetchClient;