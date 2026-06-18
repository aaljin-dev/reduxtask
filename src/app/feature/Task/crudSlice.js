import { createSlice } from "@reduxjs/toolkit";
import reducer from "../counter/counterSlice";
import { userList } from "../Task/userList";

console.log(userList);

export const crudSlice = createSlice({
  name: "crud",
  initialState: userList,
  reducers: {
    // function
  },
});

export default crudSlice.reducer;
