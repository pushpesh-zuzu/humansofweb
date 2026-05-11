import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { enquiryReducer } from "./enquirySlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    enquiry: enquiryReducer,
  },
});
