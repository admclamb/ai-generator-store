import { createSlice } from "@reduxjs/toolkit";
import storage from "../utils/Storage";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: storage.get("cartId"),
  },
  reducers: {},
});

export default cartSlice.reducer;
