import React from 'react'
import { Movie } from '../type'

const MovieCard = ({movie}: {movie: Movie}) => {
    console.log(movie)
    return (
        <>
            Title: {movie.title}
        </>
    )
}

export default MovieCard