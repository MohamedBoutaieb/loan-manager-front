import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LoanDocument } from "./loan-document.entity";

const url = "http://localhost:5000/add";
const statusUrl = "http://localhost:5000/getOne/";
const initialState = {
  loading: false,
  error: false,
  empty: true,
  loanStatus: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    amount: 0,
    state: 0,
    creationDate: 0,
    startDate: 0,
    endDate: 0,
  },
};

export type loanRequestState = Readonly<typeof initialState>;

export const requestLoan = createAsyncThunk(
  "loanRequest/getloanResponse",
  async (loanRequest: LoanDocument) => {
    return axios.post<any>(url, loanRequest);
  }
);
export const getLoanStatus = createAsyncThunk(
  "loanRequest/getloanStatus",
  async (id :string) => {
    return axios.get<any>(statusUrl +id);
  })

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
      console.log(action.payload.data);
    });
    builder.addCase(requestLoan.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getLoanStatus.pending, (state) => {
      state.loading = true;
      state.error = false;
    }
    );
    builder.addCase(getLoanStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.empty = false;
      state.loanStatus = action.payload.data;
      console.log(action.payload.data);
    });
  },
});

export const { reset } = LoanRequestSlice.actions;
export default LoanRequestSlice.reducer;
