import axios from 'axios'

export default function axiosWithAuth(){
    const token = localStorage.getItem('token');

    return axios.create({
//************************NEED API ADDRESS HERE*************************************
        baseURL: "",
        headers:{
            Authorization: token
        }
    });
}