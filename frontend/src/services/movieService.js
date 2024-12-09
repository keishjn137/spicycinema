import axios from 'axios'

let URL = 'http://localhost:3070'

export const getAllMovie = () => {
    return axios.get(URL + '/movies');
}

export const getAllMovieById = (id) => {
    return axios.get(URL + `/movies/${id}`);
}
export const addMovie = (Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner) => {
    return axios.post(URL + `/movies`, { Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner });
}
export const updateMovie = (id, Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner) => {
    return axios.put(URL + `/movies/${id}`, { Name, Genre, Duration, Price, Directors, Actors, url_image_title, url_image_banner });
}