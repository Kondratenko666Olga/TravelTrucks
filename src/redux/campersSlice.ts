import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Camper } from './types';
import { getCampers, getCamperById } from '../services/campersService';

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
  const response = await getCampers();
  return response.data;
});

interface CampersState {
  campers: Camper[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CampersState = {
  campers: [],
  status: 'idle',
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.campers = action.payload;
      });
  },
});

export default campersSlice.reducer;
