import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { fetchMovies } from '../store/reducer'
import { searchMovie } from '../utils'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  const timer = useRef(null)

  useEffect(() => {
    if (!inputValue) return

    timer.current = setTimeout(() => {
      searchMovie(inputValue).then((movies) => dispatch(fetchMovies(movies)))
    }, 1000)

    return () => clearTimeout(timer.current)
  }, [inputValue])

  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type='text'
      placeholder='Find movie...'
    />
  )
}

export default Search
