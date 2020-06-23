import axios from 'axios'

export default function axiosWithAuth(){
    const token = localStorage.getItem('token');

    return axios.create({
//************************NEED API ADDRESS HERE*************************************
        baseURL: "https://spotify-lambda.herokuapp.com/",
        headers:{
            Authorization: token
        }
    });
}