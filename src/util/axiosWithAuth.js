import axios from 'axios'

export default function axiosWithAuth(){
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://spotify-be-ls.herokuapp.com/",
        headers:{
            Authorization: token
        }
    });
}