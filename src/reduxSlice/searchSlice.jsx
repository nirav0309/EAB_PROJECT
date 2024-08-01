import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchItem: (state, action) => action.payload,
    clearSearchItem: () => "",
  },
});
export const { setSearchItem, clearSearchItem } = searchSlice.actions;
export default searchSlice.reducer;
