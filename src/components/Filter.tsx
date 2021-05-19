import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../hooks'
import { fetchFilteredMovies } from '../store/reducer'
import store from '../store/store'
import { Filter } from '../type'

const Filter = () => {
  const [isShowFilters, setIsShowFilters] = useState(false)

  const toggleHandler = () => setIsShowFilters((prev) => !prev)

  return (
    <>
      <button onClick={toggleHandler}>
        {!isShowFilters ? 'Show Filters' : 'Hide Filters'}{' '}
      </button>
      {isShowFilters && <Filters />}
    </>
  )
}

const Filters = () => {
  const [filters, setFilters] = useState<Filter>()
  const [genres, setGenres] = useState([])
  const dispatch = useAppDispatch()

  const handleInputChange = (event: any) => {
    const target = event.target

    if (target.checked) {
      setGenres((prev) => [...prev, target.name])
    }

    if (!target.checked) {
      const updatedGenres = genres.filter((genre) => genre !== target.name)
      setGenres(updatedGenres)
    }
  }

  const handleSetFilters = () => {
    setFilters({ with_genres: genres.join(',') })
  }

  useEffect(() => {
    dispatch(fetchFilteredMovies(filters))
  }, [filters])

  return (
    <>
      <GenreFilter onChange={handleInputChange} />
      <button onClick={handleSetFilters}>Update</button>
    </>
  )
}

const GenreFilter = ({ onChange }: { onChange: React.ChangeEventHandler }) => {
  const [forRender, setForRender] = useState<JSX.Element[]>()
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const elements = []
    const { genresList } = store.getState()

    for (let id in genresList) {
      const element = (
        <label key={id}>
          <input type='checkbox' name={id} onChange={onChange} />
          {genresList[id]}
        </label>
      )
      elements.push(element)
    }

    setForRender(elements)
  }, [])

  return (
    <div>
      <p onClick={() => setIsShow((prev) => !prev)}>Жанр</p>
      {isShow && <StyledGenresList>{forRender}</StyledGenresList>}
    </div>
  )
}

const StyledGenresList = styled.ul`
  top: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  background: cyan;
`

export default Filter
