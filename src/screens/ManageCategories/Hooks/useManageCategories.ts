import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks';
import { categoriesSelector } from '../../../redux/selectors';
import { setCategories } from '../../../redux/slices/categoriesSlice';
import { getUniqueId } from '../../../utils';
import { APP_TEXT } from '../../../strings';

export default () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(categoriesSelector);
  const onCreateCategoryPressed = useCallback(() => {
    dispatch(
      setCategories([
        ...categories,
        {
          id: getUniqueId().toString(),
          title: '',
          fields: [
            {
              id: getUniqueId().toString(),
              type: 'text',
              label: `${APP_TEXT.unnamedField} 0`,
            },
          ],
          machines: [],
          titleField: '',
        },
      ]),
    );
  }, [categories]);

  const onRemoveCategoryPressed = useCallback(
    (id: string) => {
      const newCategories = categories.filter(cat => cat.id !== id);
      dispatch(setCategories([...newCategories]));
    },
    [categories],
  );
  return {
    categories,
    onCreateCategoryPressed,
    onRemoveCategoryPressed,
  };
};
