import axios from 'axios';
const URL = `https://jsonplaceholder.typicode.com`;

export function getArticles(){
    const request = fetch(`${URL}/posts`)
    .then(response => response.json())
    .then(json => json)
    /*axios.get(`${URL}/posts`)
    .then(response => response.data)*/

    return {
        type: 'GET_ARTICLES',
        payload: request
    }
}