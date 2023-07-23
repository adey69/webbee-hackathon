import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks';
import { categoriesSelector } from '../../../redux/selectors';
import { getFieldType } from '../../../utils';
import { setCategories } from '../../../redux/slices/categoriesSlice';

export default (categoryId: string) => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(categoriesSelector);

  const currentCategoryIndex = useMemo(
    () => categories.findIndex(cat => cat.id === categoryId),
    [categories],
  );
  const updatedCategories = useMemo(() => [...categories], [categories]);
  const updatedCategory = useMemo(
    () => ({ ...updatedCategories[currentCategoryIndex] }),
    [updatedCategories],
  );

  const onFieldLabelUpdated = useCallback(
    (label: string, text: string, id: string) => {
      if (updatedCategory?.titleField === label) {
        updatedCategory.titleField = text;
      }
      const updatedFields = updatedCategory.fields.map(field =>
        field.id === id ? { ...field, label: text } : field,
      );
      const newMachines = updatedCategory?.machines?.map(machine => {
        const newMachine: IMachineItem = { ...machine, [text]: machine[label] };
        delete newMachine[label];
        return newMachine;
      });
      updatedCategory.machines = newMachines;
      updatedCategory.fields = updatedFields;
      updatedCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories(updatedCategories));
    },
    [currentCategoryIndex, updatedCategories, updatedCategory],
  );

  const onFieldTypeChanged = useCallback(
    (type: string, id: string) => {
      const fieldType = getFieldType(type);

      const updatedFields = updatedCategory.fields.map(field => {
        return field.id === id ? { ...field, type: fieldType } : field;
      });
      updatedCategory.fields = updatedFields;
      updatedCategories[currentCategoryIndex] = updatedCategory;
      dispatch(setCategories(updatedCategories));
    },
    [currentCategoryIndex, updatedCategories, updatedCategory],
  );
  return {
    onFieldLabelUpdated,
    onFieldTypeChanged,
  };
};
