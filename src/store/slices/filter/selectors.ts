import { RootState } from '../..';

export const filterSelector = (state: RootState) => state.filter;
export const searchStringSelector = (state: RootState) => state.filter.searchString;
export const activeCategorySelector = (state: RootState) => state.filter.activeCategory;
export const activeSortSelector = (state: RootState) => state.filter.activeSort;
