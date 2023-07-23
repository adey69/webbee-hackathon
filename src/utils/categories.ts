import uuid from 'react-native-uuid';
import { APP_TEXT } from '../strings';

export const getFieldType = (type: string) => {
  let typeOfField: FieldType = 'text';
  switch (type) {
    case APP_TEXT.number:
      typeOfField = 'number';
      break;
    case APP_TEXT.checkbox:
      typeOfField = 'checkbox';
      break;
    case APP_TEXT.date:
      typeOfField = 'date';
      break;
  }
  return typeOfField;
};

export const getUniqueId = () => {
  return uuid.v4();
};
