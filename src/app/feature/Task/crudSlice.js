import { createSlice } from "@reduxjs/toolkit";
import reducer from "../counter/counterSlice";
import { userList } from "../Task/userList";

console.log(userList);

export const crudSlice = createSlice({
  name: "crud",
  initialState: userList,
  reducers: {
    handleAdd: (state, action) => {
      console.log("click");
      state.push(action.payload);
    },

    handleUpdate: (state, action) => {
      console.log("Edit");
      const { id, name, email } = action.payload;
      const user = state.find((users) => users.id === id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
    handleDelete: (state, action) => {
      console.log("Delete");
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});
export const { handleAdd, handleUpdate, handleDelete } = crudSlice.actions;
export default crudSlice.reducer;
