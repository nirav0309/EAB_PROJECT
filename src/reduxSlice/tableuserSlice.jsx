import { createSlice } from "@reduxjs/toolkit";

export const tableuserSlice = createSlice({
  name: "tableusers",
  initialState: {
    tableData: [],
    loading: false,
    error: null,
  },
  reducers: {
    getTableData: (state) => {
      state.loading = true;
    },
    getTableDataSuccess: (state, action) => {
      state.tableData = action.payload;
      state.loading = false;
    },
    getTableDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getTableData, getTableDataSuccess, getTableDataFailure } =
  tableuserSlice.actions;
export default tableuserSlice.reducer;
