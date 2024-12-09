import axios from 'axios'

let URL = 'http://localhost:3070'

export const getAllbill = () => {
    return axios.get(URL + '/bills/');
}

