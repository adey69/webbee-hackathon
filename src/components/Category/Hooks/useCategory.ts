import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks';
import { getFieldType, getUniqueId } from '../../../utils';
import { categoriesSelector } from '../../../redux/selectors';
import { setCategories } from '../../../redux/slices/categoriesSlice';

export default (currentCategory: ICategory) => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector(categoriesSelector);
  const currentCategoryIndex = useMemo(
    () => categories.findIndex(cat => cat.id === currentCategory.id),
    [categories],
  );
  const prevCategories = useMemo(() => [...categories], [categories]);
  const updatedCategory = useMemo(
    () => ({ ...prevCategories[currentCategoryIndex] }),
    [prevCategories, currentCategoryIndex],
  );

  const onAddFieldPress = useCallback(
    (type: string) => {
      const typeOfField = getFieldType(type);
      updatedCategory.fields = [
        ...updatedCategory.fields,
        {
          id: getUniqueId().toString(),
          type: typeOfField ?? 'text',
          label: '',
        },
      ];
      prevCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories([...prevCategories]));
    },
    [updatedCategory, prevCategories, currentCategoryIndex],
  );

  const onRemoveFieldPressed = useCallback(
    (id: string) => {
      const filteredFields = currentCategory?.fields.filter(
        field => field.id !== id,
      );

      updatedCategory.fields = filteredFields;
      prevCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories(prevCategories));
    },
    [updatedCategory, prevCategories, currentCategoryIndex],
  );

  const onCategoryTitleChanged = useCallback(
    (text: string) => {
      updatedCategory.title = text;
      prevCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories(prevCategories));
    },
    [updatedCategory, prevCategories, currentCategoryIndex],
  );

  const onTitleFieldChanged = useCallback(
    (label: string) => {
      updatedCategory.titleField = label;
      prevCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories(prevCategories));
    },
    [updatedCategory, prevCategories, currentCategoryIndex],
  );

  return {
    onTitleFieldChanged,
    onAddFieldPress,
    onRemoveFieldPressed,
    onCategoryTitleChanged,
  };
};
