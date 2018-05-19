// General api to access data
import ApiConstants from './ApiConstants';
export default function api(path, params, method, token) {
    let options;
    token
        ? (options = Object.assign(
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    token: token
                }
            },
            { method: method },
            params ? { body: JSON.stringify(params) } : null
        ))
        : (options = Object.assign(
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            },
            { method: method },
            params ? { body: JSON.stringify(params) } : null
        ));

    return fetch(ApiConstants.BASE_URL + path, options)
        .then(resp => resp.json())
        .then(json => json)
        .catch(error => error);
}
