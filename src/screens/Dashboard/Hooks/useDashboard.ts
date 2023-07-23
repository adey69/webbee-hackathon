import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks';
import { categoriesSelector } from '../../../redux/selectors';
import { setCategories } from '../../../redux/slices/categoriesSlice';
import { APP_TEXT } from '../../../strings';
import { getUniqueId } from '../../../utils';

export default () => {
  const { categories } = useAppSelector(categoriesSelector);
  const dispatch = useAppDispatch();
  const sectionListData = useMemo(
    () =>
      categories.map((category, index) => ({
        title:
          category.title?.length > 0
            ? category.title
            : `${APP_TEXT.unnamedCategory} ${index}`,
        data: category.machines,
        fields: category.fields,
        categoryId: category.id,
        category,
      })),
    [categories],
  );

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
    sectionListData,
    onRemoveItemPressed,
    onAddItemPressed,
  };
};
