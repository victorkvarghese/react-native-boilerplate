// General api to access data
import ApiConstants from './ApiConstants';
export default function api(path, params, method, token) {
    let options;
    options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(token && { token: token })
        },
        method: method,
        ...(params && { body: JSON.stringify(params) })
    };

    return fetch(ApiConstants.BASE_URL + path, options)
        .then(resp => resp.json())
        .then(json => json)
        .catch(error => error);
}
