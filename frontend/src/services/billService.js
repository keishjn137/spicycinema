import axios from 'axios'

let URL = 'http://localhost:3070'

export const getAllbill = () => {
    return axios.get(URL + '/bills/');
}
export const Createbill = (idAccount , nameMovie , nameBranch , showtime , seat)=>{
    return axios.post(URL + '/bills',{idAccount , nameMovie , nameBranch , showtime , seat})
}
