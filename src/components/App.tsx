import React, { useEffect, useState } from 'react'
import {
  fetchGenres,
  fetchPreloadedMovies,
} from '../store/reducer'
import MovieCard from './MovieCard'
import Header from './Header'
import { useAppDispatch, useAppSelector } from '../hooks'

const App = () => {
  const [isFetching, setIsFetching] = useState(true)

  const dispatch = useAppDispatch()
  const moviesList = useAppSelector((state) => state.moviesList)

  useEffect(() => {
    dispatch(fetchGenres())
    dispatch(fetchPreloadedMovies()).then(() => setIsFetching(!isFetching))
  }, [])

  return (
    <>
      <Header />
      {!isFetching &&
        moviesList.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </>
  )
}
export default App
