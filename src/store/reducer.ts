import { createSlice } from '@reduxjs/toolkit'
import { State } from '../type'

const initialState: State = {
  genresList: {1: 'test'},
  moviesList: []
}

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    fetchGenres: (state, action) => {
      const fetchedGenresList = action.payload
      state.genresList = fetchedGenresList
    },
    fetchMovies: (state, action) => {
      const fetchedMoviesList = action.payload
      state.moviesList = fetchedMoviesList
    }
  },
})

export const { fetchGenres, fetchMovies } = genresSlice.actions

export default genresSlice.reducer