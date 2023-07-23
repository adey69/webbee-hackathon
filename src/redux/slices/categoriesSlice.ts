import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: ICategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories: (state, { payload }: PayloadAction<ICategory[]>) => {
      return { ...state, categories: [...payload] };
    },
    updateMachineAttribute: (
      state,
      {
        payload,
      }: PayloadAction<{
        categoryId: string;
        machineId: string;
        label: string;
        value: string;
      }>,
    ) => {
      const { categoryId, machineId, label, value } = payload;
      const categoryIndex = state.categories.findIndex(
        category => category.id === categoryId,
      );
      if (categoryIndex !== -1) {
        const machineIndex = state.categories[categoryIndex].machines.findIndex(
          machine => {
            return machine.id === machineId;
          },
        );

        if (machineIndex !== -1) {
          state.categories[categoryIndex].machines[machineIndex][label] = value;
        }
      }
      return state;
    },
  },
});

export default categoriesSlice.reducer;

export const { setCategories, updateMachineAttribute } =
  categoriesSlice.actions;
