import React, { useEffect, useState } from 'react'
import { discoverMovie, getGenres } from '../utils'
import { fetchGenres } from '../store/reducer'
import MovieCard from './MovieCard'
import { useDispatch } from 'react-redux'

const App = () => {
  const [state, setState] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    getGenres().then((data) => {
      dispatch(fetchGenres(data))
    })
    discoverMovie().then((moviesList) => {
      setState(moviesList)
      setIsFetching(false)
    })
  }, [])

  return (
    <>
      {!isFetching &&
        state.map((item: any) => <MovieCard movie={item} key={item.id} />)}
    </>
  )
}
export default App
