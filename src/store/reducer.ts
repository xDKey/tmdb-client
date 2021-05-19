import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { State } from '../type'
import { apiClient } from '../utils/apiClient'

const api = new apiClient()

export const fetchGenres = createAsyncThunk(
  'genres/fetchGenres', 
  async () => api.getGenres()
)
export const fetchPreloadedMovies = createAsyncThunk(
  'movies/fetchMovie',
  async () => api.discoverMovie()
)
export const fetchSearhedMovie = createAsyncThunk(
  'movies/findMovie',
  async (query: string) => api.searchMovie(query)
)

const initialState: State = {
  genresList: { 1: 'test' },
  moviesList: [],
}

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      const rowGenres = action.payload
      const genresList: { [k: number]: string } = {}

      rowGenres.forEach(({ id, name }: { id: number; name: string }) => {
        genresList[id] = name
      })
      state.genresList = genresList
    })
    builder.addCase(fetchPreloadedMovies.fulfilled, (state, action) => {
      const fetchedMoviesList = action.payload
      state.moviesList = fetchedMoviesList
    })
    builder.addCase(fetchSearhedMovie.fulfilled, (state, action) => {
      const fetchedMoviesList = action.payload
      state.moviesList = fetchedMoviesList
    })
  },
})

export default genresSlice.reducer
