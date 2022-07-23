import axios from "axios";

const API_KEY = 'c20f2af9e3efd6f7ff4fb5feff25f58d';
const BASE_URL = `https://api.themoviedb.org/3`;

export async function getTrending() {
    return await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export async function getSearchMovies(titleMovies) {
    return await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${titleMovies}&page=1`
    );
};

export async function getMovieDetails(movie_id) {
    return await axios.get(
        `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
};

export async function getMovieCredits(movie_id) {
    return await axios.get(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`);
};

export async function getMovieReviews(movie_id) {
    return await axios.get(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
};