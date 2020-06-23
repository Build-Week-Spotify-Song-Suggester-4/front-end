import axios from 'axios'

export default function axiosWithAuth(){
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://reqres.in',
        // baseURL: "https://spotify-lambda.herokuapp.com/",
        headers:{
            Authorization: token
        }
    });
}