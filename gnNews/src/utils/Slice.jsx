import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayType: "list",
  styles: {
    list: { width: "100%" },
    tiles: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      marginRight: "5%",
    },
  },
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayType(state, action) {
      state.displayType = action.payload;
    },
  },
});

export const { setDisplayType } = displaySlice.actions;

export default displaySlice.reducer;
