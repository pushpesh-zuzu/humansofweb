import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axios";

export const submitEnquiry = createAsyncThunk(
  "enquiry/submitEnquiry",
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/api/submit-enquiry",
        payload
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || error.message
      );
    }
  }
);

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(submitEnquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Success
      .addCase(submitEnquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // Failed
      .addCase(submitEnquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const enquiryReducer = enquirySlice.reducer;

export default enquiryReducer;