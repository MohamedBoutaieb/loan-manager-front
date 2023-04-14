import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000/loanRequests";

const initialState = {
  loading: false,
  error: false,
  empty: true,
  loanStatus: "",
};

export type loanRequestState = Readonly<typeof initialState>;

export const requestLoan = createAsyncThunk(
  "loanRequest/getloanResponse",
  async (loanRequest: { amount: number; duration: number }) => {
    return axios.post<any>(url, loanRequest);
  }
);

export const LoanRequestSlice = createSlice({
  name: "loanRequest",
  initialState: initialState as loanRequestState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestLoan.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(requestLoan.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.empty = false;
      state.loanStatus = action.payload.data;
    });
    builder.addCase(requestLoan.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { reset } = LoanRequestSlice.actions;
export default LoanRequestSlice.reducer;
