const baseUrl = '';
const  fetchClient = (url) => {
    return fetch(baseUrl+url,{
        credentials: 'include',
    });
}
export default fetchClient;