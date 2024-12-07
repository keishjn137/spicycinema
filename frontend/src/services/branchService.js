import axios from 'axios'

let URL = 'http://localhost:3070'

export const getAllBranch = () => {
    return axios.get(URL + '/branches');
}
