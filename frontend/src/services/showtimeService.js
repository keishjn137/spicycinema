import axios from 'axios'

let URL = 'http://localhost:3070'

export const getAllShowtime = (idBranch, idMovie) => {
    return axios.post(URL + '/showtimes', { idBranch, idMovie });
}

