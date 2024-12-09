import axios from 'axios'

let URL = 'http://localhost:3070'

export const register = (username, password, gmail) => {
    return axios.post(URL + '/accounts/sign-up', { username, password, gmail });
}

export const signin = (username, password)=>{
    return axios.post(URL + '/accounts/sign-in',{username,password});
}
export const getAllUser = ()=>{
    return axios.get(URL + '/accounts/');
}

