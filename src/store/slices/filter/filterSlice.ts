import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sortList } from '../../../constants';

import { SortBy } from '../../../models/SortBy';

interface State {
  activeCategory: string | null;
  activeSort: SortBy;
  searchString: string;
}

const initialState: State = {
  activeCategory: null,
  activeSort: sortList[0],
  searchString: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string | null>) {
      state.activeCategory = action.payload;
    },
    setActiveSort(state, action: PayloadAction<SortBy>) {
      state.activeSort = action.payload;
    },
    setSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
    },
    handleQueryString(state, action: PayloadAction<Record<string, string>>) {
      const activeSort = sortList.find(
        (el) => el.order === action.payload.order && el.sortBy === action.payload.sortBy
      );
      state.activeSort = { ...activeSort! };
      state.activeCategory = action.payload.category || null;
    },
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
