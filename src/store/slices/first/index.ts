import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const first = createSlice({
  name: "fisrt",
  initialState: initialState,
  reducers: {},
});

const { reducer } = first;
export default reducer;
