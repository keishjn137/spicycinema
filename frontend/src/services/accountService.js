import axios from 'axios'

let URL = 'http://localhost:3070'

export const register = (username, password, gmail) => {
    return axios.post(URL + '/accounts/sign-up', { username, password, gmail });
}
