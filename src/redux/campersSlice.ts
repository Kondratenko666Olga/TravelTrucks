// src/redux/campersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from '../services/campersService';

// Асинхронний thunk для отримання всіх кемперів
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async () => {
    const response = await getCampers();
    return response.data;
  }
);

// Асинхронний thunk для отримання одного кемпера за його ID
export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id: string) => {
    const response = await getCamperById(id);
    return response.data;
  }
);

// Створення slice для керування станом кемперів
export const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campersList: [],          // Масив всіх кемперів
    camperDetails: null,       // Деталі одного кемпера
    status: 'idle',            // Статус для запитів (idle, loading, succeeded, failed)
    error: null as string | null,               // Зберігання помилки, якщо вона є
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обробка стану для fetchCampers
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.campersList = action.payload;  // Оновлення масиву кемперів
        state.error = null; // Очищення помилки після успішного запиту
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        // Якщо action.error.message є undefined, присвоюємо стандартне повідомлення
        state.error = action.error.message ?? 'Something went wrong';
      })
      // Обробка стану для fetchCamperById
      .addCase(fetchCamperById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.camperDetails = action.payload;  // Оновлення деталей одного кемпера
        state.error = null; // Очищення помилки після успішного запиту
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong'; // Перевірка на undefined
      });
  },
});

export default campersSlice.reducer;
