import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    count: 0,
  },
  reducers: {
    countQuotes: (state) => {
      state.count += 1;
    },
  },
});

export const { countQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;
