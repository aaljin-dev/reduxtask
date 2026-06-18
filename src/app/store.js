import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/feature/counter/counterSlice";
import curdReducer from "../app/feature/Task/crudSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    curd: curdReducer,
  },
});
