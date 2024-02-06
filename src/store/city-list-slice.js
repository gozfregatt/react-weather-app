import { createSlice } from "@reduxjs/toolkit";

const cityListSlice = createSlice({
  name:'citylist',
  initialState: {
    cityList: [ ]
  },

  reducers: {
    initCityList(state, action) {
      state.cityList = action.payload
    },
  }
})

export const cityListSliceActions = cityListSlice.actions
export default cityListSlice