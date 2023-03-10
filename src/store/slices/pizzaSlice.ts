import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { axios } from '../../api';
import { Pizza } from '../../models/Pizza';

export const getOnePizza = createAsyncThunk('pizza/getOnePizza', async (id: string) => {
  const { data } = await axios.get<Pizza>(`/pizzas/${id}`);
  return data;
});

interface State {
  pizza: Pizza | null;
  status: 'init' | 'error' | 'success' | 'loading';
}

const initialState: State = {
  pizza: null,
  status: 'init',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getOnePizza.pending, (state) => {
      state.pizza = null;
      state.status = 'loading';
    });
    builder.addCase(getOnePizza.rejected, (state) => {
      state.pizza = null;
      state.status = 'error';
    });
    builder.addCase(getOnePizza.fulfilled, (state, { payload }) => {
      state.pizza = payload;
      state.status = 'success';
    });
  },
});

export const { actions: pizzaActions, reducer: pizzaReducer } = pizzaSlice;
