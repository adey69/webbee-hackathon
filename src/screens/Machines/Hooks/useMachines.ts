import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks';
import { categoriesSelector } from '../../../redux/selectors';
import { getUniqueId } from '../../../utils';
import { setCategories } from '../../../redux/slices/categoriesSlice';

export default (categoryId: string) => {
  const { categories } = useAppSelector(categoriesSelector);
  const currentCategoryIndex = categories.findIndex(
    cat => cat.id === categoryId ?? '',
  );
  const currentCategory = useMemo(
    () => categories[currentCategoryIndex],
    [categories],
  );
  const dispatch = useAppDispatch();

  const onRemoveItemPressed = useCallback(
    (machineId: string, categoryId: string) => {
      const currentCategoryIndex = categories.findIndex(
        cat => cat.id === categoryId,
      );
      const prevCategories = [...categories];
      const updatedCategory = { ...prevCategories[currentCategoryIndex] };
      updatedCategory.machines = updatedCategory?.machines?.filter(
        machine => machine?.id !== machineId,
      );
      prevCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories([...prevCategories]));
    },
    [categories],
  );

  const onAddItemPressed = useCallback(
    (categoryId: string) => {
      const currentCategoryIndex = categories.findIndex(
        cat => cat.id === categoryId,
      );
      const prevCategories = [...categories];
      const updatedCategory = { ...prevCategories[currentCategoryIndex] };

      updatedCategory.machines = [
        ...updatedCategory.machines,
        {
          id: getUniqueId().toString(),
        },
      ];
      prevCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories([...prevCategories]));
    },
    [categories],
  );

  return {
    currentCategory,
    categories,
    onAddItemPressed,
    onRemoveItemPressed,
  };
};
