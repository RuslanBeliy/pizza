import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { axios } from '../../api';

import { Pizza } from '../../models/Pizza';

interface Params {
  category?: string | null;
  sortBy?: string;
  order?: string;
}

export const getPizzas = createAsyncThunk('pizzas/getPizzas', async (params: Params) => {
  const { data } = await axios.get('/pizzas', { params });
  return data;
});

interface State {
  pizzas: Pizza[];
  status: 'init' | 'loading' | 'error' | 'success';
}

const initialState: State = {
  pizzas: [],
  status: 'init',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = 'loading';
    });
    builder.addCase(getPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = 'error';
    });
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = 'success';
    });
  },
});

export const { actions: pizzasActions, reducer: pizzasReducer } = pizzasSlice;
