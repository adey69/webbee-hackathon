import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks';
import { categoriesSelector } from '../../../redux/selectors';
import { updateMachineAttribute } from '../../../redux/slices/categoriesSlice';
import { APP_TEXT } from '../../../strings';

export default () => {
  const { categories } = useAppSelector(categoriesSelector);
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarTriggerLabel, setCalendarTriggerLabel] = useState('');

  const getTitleField = useCallback(
    (category: ICategory, machine: IMachineItem) => {
      if (category?.titleField?.length > 0) {
        return machine[category?.titleField] || APP_TEXT.titleNA;
      }
      const titleField =
        category?.fields?.length > 0
          ? machine[
              category?.fields[0]?.label?.length > 0
                ? category?.fields[0]?.label
                : `${APP_TEXT.unnamedField} 0`
            ]
          : `${APP_TEXT.unnamedField} 0`;
      return titleField || APP_TEXT.titleNA;
    },
    [],
  );

  const onFieldValueUpdated = useCallback(
    (text: string, id: string, categoryId: string, label: string) => {
      dispatch(
        updateMachineAttribute({
          label,
          categoryId,
          machineId: id,
          value: text,
        }),
      );
    },
    [categories],
  );

  const onDateFieldPressed = useCallback((label: string) => {
    setCalendarTriggerLabel(label);
    setShowCalendar(true);
  }, []);

  return {
    showCalendar,
    selectedDate,
    categories,
    calendarTriggerLabel,
    setSelectedDate,
    setShowCalendar,
    onFieldValueUpdated,
    onDateFieldPressed,
    getTitleField,
  };
};
