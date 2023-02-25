import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDataFromApi = createAsyncThunk(
  'greetings/getDataFromApi', // 'slicename/action name'
  async () => {
    const response = await axios.get('http://localhost:3000/api/v1/greetings');
    console.log(response.data.message);
    const responseMsg = response.data.message;
    return responseMsg;
  },
);

const initialState = {
  greetings: [],
  error: null,
  status: 'idle',
};

/* eslint-disable no-param-reassign */

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
        console.log('loading');
      })
      .addCase(getDataFromApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('success');

        state.greetings = action.payload;
      })
      .addCase(getDataFromApi.rejected, (state, action) => {
        state.status = 'rejected';
        console.log('rejected');
        state.error = action.error.message;
      });
  },
  /* eslint-enable no-param-reassign */
});

export default greetingsSlice.reducer;
