import { createSlice } from "@reduxjs/toolkit";
import storage from "../utils/Storage";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: storage.get("theme") ?? "light",
  },
  reducers: {
    setDarkMode: (state) => {
      state.theme = "dark";
    },
    setLightMode: (state) => {
      state.theme = "light";
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { setDarkMode, setLightMode, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
