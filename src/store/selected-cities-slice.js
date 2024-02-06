import { createSlice } from "@reduxjs/toolkit";

const selectedCitiesSlice = createSlice({
  name:'cities',
  initialState: {
    selectedCities: [
      {id:'c1', name: 'Budapest'},
    ],
    currentCity: '',
  },

  reducers: {
    addSelectedCity(state, action) {
      state.selectedCities.push(action.payload[0])
    },

    setCurrentCity(state, action) {
      state.currentCity = action.payload
    }
  }
})

export const selectedCitiesActions = selectedCitiesSlice.actions
export default selectedCitiesSlice