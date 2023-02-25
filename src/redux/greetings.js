import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/* eslint-disable no-param-reassign */
export const getDataFromApi = createAsyncThunk(
  'greetings/getDataFromApi', // 'slicename/action name'
  async () => {
    const response = await axios.get('http://localhost:3000/api/v1/greetings');
    const responseMsg = response.data.message;
    return responseMsg;
  },
);

const initialState = {
  greetings: [],
  error: null,
  status: 'idle',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    getGreeting(state, action) {
      state.greetings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataFromApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greetings = action.payload;
      })
      .addCase(getDataFromApi.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },

});

export default greetingsSlice.reducer;
/* eslint-enable no-param-reassign */
