import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const value = document.body.classList.toggle("light");
};

export const ToogleSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    themeToogle: (state, action) => {
      if (state.value === "light")
        action.value = document.body.classList.toggle("dark");
    },
  },
});

export const { themeToogle } = createSlice.actions;
export default ToogleSlice.reducer;
