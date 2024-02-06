import { configureStore } from "@reduxjs/toolkit";
import selectedCitiesSlice from "./selected-cities-slice";
import cityListSlice from "./city-list-slice";

const store = configureStore({
  reducer: {
    cities: selectedCitiesSlice.reducer,
    citylist: cityListSlice.reducer
  }
})

export default store