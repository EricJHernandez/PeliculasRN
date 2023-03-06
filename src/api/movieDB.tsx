import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ef27458c576c08a5ea24cc223f3aaba9',
        language: 'es-ES'
    }
});

export default movieDB;