import { createSlice } from '@reduxjs/toolkit'

type State = {
  genresList: { [id: number]: string }
}

const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    genresList: {},
  },
  reducers: {
    fetchGenres: (state, action) => {
      const fetchedGenresList = action.payload
      state.genresList = fetchedGenresList
    },
  },
})

export const { fetchGenres } = genresSlice.actions

export default genresSlice.reducer

// export const rootReducer = (
//   state: State,
//   action: Action = { type: 'INIT' }
// ) => {
//   switch (action.type) {
//     case 'SET_GENRES_LIST':
//       const newGenresList = action.payload
//       return { ...state, genresList: newGenresList }
//     default:
//       return state
//   }
// }
