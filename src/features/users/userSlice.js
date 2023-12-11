import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Karki sarkar" },
  { id: "1", name: "Hemant" },
  { id: "2", name: "Prasant" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
