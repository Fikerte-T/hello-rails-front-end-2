import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greetings: [],
  error: null,
  status: 'idle',
};

export const getDataFromApi = createAsyncThunk(
  'greetings/getDataFromApi', // 'slicename/action name'
  async () => {
    const response = await axios.get('http://localhost:3000/api/v1/greetings');
    return response;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {

  },
  /* eslint-disable no-param-reassign */
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
  /* eslint-enable no-param-reassign */
});

export default greetingsSlice.reducer;
