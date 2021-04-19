import React, { useEffect, useState } from 'react'
import { discoverMovie, getGenres } from '../utils'
import { fetchGenres, fetchMovies } from '../store/reducer'
import MovieCard from './MovieCard'
import { useAppDispatch, useAppSelector } from '../hooks'

const App = () => {
  const [state, setState] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const dispatch = useAppDispatch()
  const moviesList = useAppSelector(state => state.moviesList)

  useEffect(() => {
    getGenres().then((data) => {
      dispatch(fetchGenres(data))
    })
    discoverMovie().then((moviesList) => {
      dispatch(fetchMovies(moviesList))
      setIsFetching(false)
    })
  }, [])

  return (
    <>
      {!isFetching &&
        moviesList.map((movie: any) => <MovieCard movie={movie} key={movie.id} />)}
    </>
  )
}
export default App
