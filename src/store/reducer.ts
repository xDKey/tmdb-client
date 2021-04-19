import { createSlice } from '@reduxjs/toolkit'
import { State } from '../type'

const initialState: State = {
  genresList: {1: 'test'}
}

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    fetchGenres: (state, action) => {
      const fetchedGenresList = action.payload
      state.genresList = fetchedGenresList
    },

  },
})

export const { fetchGenres } = genresSlice.actions

export default genresSlice.reducer