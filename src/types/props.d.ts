type FieldType = 'text' | 'date' | 'checkbox' | 'number';

interface ICategoryField {
  id: string;
  type: FieldType;
  label: string;
}
