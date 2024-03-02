import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {

}

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
      setAllLayers: (state, action) => {
        state.shouldShowTrafficLights = action.payload;

      },}})

export const mapSelector = (state) => state.map;

export default mapSlice.reducer;
export const {
} = mapSlice.actions;