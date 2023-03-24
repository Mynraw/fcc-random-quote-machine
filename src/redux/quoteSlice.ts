import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    count: 0,
    palette: 0,
  },
  reducers: {
    countQuotes: (state) => {
      state.count += 1;
    },
    themePalette: (state, action) => {
      state.palette = action.payload;
    }
  },
});

export const { countQuotes, themePalette } = quoteSlice.actions;
export default quoteSlice.reducer;
