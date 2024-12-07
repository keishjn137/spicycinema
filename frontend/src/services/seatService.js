import axios from 'axios'

let URL = 'http://localhost:3070'

export const getAllSeat = (idShowtime) => {
    return axios.get(URL + `/seats/${idShowtime}`);
}

