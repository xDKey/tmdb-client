import React, { useEffect, useState } from 'react'
import { findMovie, discoverMovie } from '../utils'
import MovieCard from './MovieCard'

const App = () => {
  const [state, setState] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    discoverMovie().then((moviesList) => {
      setState(moviesList)
      setIsFetching(false)
    })
  }, [])

  return (
    <>
      {!isFetching && state.map((item: any) => <MovieCard movie={item} />)}
    </>
  )
}
export default App