import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}


export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [movieState, setMovieState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })
    
    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing')
        const popularPromise    = movieDB.get<MovieDBMoviesResponse>('/popular')
        const topRatedPromise   = movieDB.get<MovieDBMoviesResponse>('/top_rated')
        const upcomingPromise   = movieDB.get<MovieDBMoviesResponse>('/upcoming')

        const reponseAllMovies = await Promise.all([ nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise ])

        setMovieState({
            nowPlaying: reponseAllMovies[0].data.results,
            popular: reponseAllMovies[1].data.results,
            topRated: reponseAllMovies[2].data.results,
            upcoming: reponseAllMovies[3].data.results
        })

        setIsLoading( false );
    }

    useEffect(()=>{
        getMovies();
    },[]);
    
    return {
        ...movieState,
        isLoading
    }

}
