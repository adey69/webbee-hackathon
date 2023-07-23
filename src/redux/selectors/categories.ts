import { createSelector } from '@reduxjs/toolkit';

export const categoriesSelector = createSelector(
  (state: IRootState) => state.categories,
  state => state,
);
