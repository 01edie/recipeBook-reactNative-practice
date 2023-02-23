import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ids:[]
}

export const favoritesSlice = createSlice({
  name: 'favoritesData',
  initialState,
  reducers: {
    addID: (state, action) => {
      const id = action.payload
    //   console.log('adding')
    //   console.log({...state,ids:[...state.ids,id]})
      state.ids.push(id)
    },
    // eslint-disable-next-line no-unused-vars
    removeID: (state, action) => {
        // console.log('deleting')
        const id = action.payload
        state.ids.splice(state.ids.indexOf(id), 1)
      },
  },
})

export const favoritesData = (state) => state.ids

export const { addID, removeID } = favoritesSlice.actions

export default favoritesSlice.reducer
