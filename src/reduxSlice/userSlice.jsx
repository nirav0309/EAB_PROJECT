import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: [],
    loading: false,
    error: null,
  },
  reducers: {
    getUserData: (state) => {
      state.loading = true;
    },
    getUserDataSuccess: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    getUserDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getUserData, getUserDataSuccess, getUserDataFailure } =
  userSlice.actions;
export default userSlice.reducer;
