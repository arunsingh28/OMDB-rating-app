import axios from "axios";

const api = axios.create({
    baseURL: process.env.ENV === 'production' ? '' : 'http://localhost:4000/api',
    headers: {
        "Content-Type": "application/json"
    }
})

export const fetchMovies = async (title: string) => {
    return await api.get(`movies/search?title=${title}`)
}

export const addToFav = async (data: any) => {
    return await api.post('movies/favorites', data)
}

export const removeFromFav = async (imdb: string) => {
    return await api.delete(`movies/remove?imdbID=${imdb}`)
}

export const allFavMoviesList = async () => {
    return await api.get('fav/list')
}