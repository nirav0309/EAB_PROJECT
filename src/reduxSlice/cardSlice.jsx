import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cardData: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCardData: (state) => {
      state.loading = true;
    },
    getCardDataSuccess: (state, action) => {
      state.cardData = action.payload;
      state.loading = false;
    },
    getCardDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteCard: (state, action) => {
      state.loading = true;
    },
    deleteCardSuccess: (state, action) => {
      const itemId = action.payload;
      state.cardData = state.cardData?.filter((e) => e.id !== itemId);
      state.loading = false;
    },
    deleteCardFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateCard: (state, action) => {
      state.loading = true;
    },
    updateCardSuccess: (state, action) => {
      state.cardData = state.cardData.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
      state.loading = false;
    },
    updateCardFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  getCardData,
  getCardDataSuccess,
  getCardDataFailure,
  deleteCard,
  deleteCardSuccess,
  deleteCardFailure,
  updateCard,
  updateCardSuccess,
  updateCardFailure,
} = cardSlice.actions;
export default cardSlice.reducer;
