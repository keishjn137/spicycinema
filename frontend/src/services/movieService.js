import axios from 'axios'

let URL = 'http://localhost:3070'

export const getAllMovie = () => {
    return axios.get(URL + '/movies');
}

export const getAllMovieById = (id) => {
    return axios.get(URL + `/movies/${id}`);
}