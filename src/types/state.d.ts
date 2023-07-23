interface IMachineAttributes {
  id: string;
}

interface IMachineItem {
  id: string;
  [key: string]: string;
}

interface ICategory {
  id: string;
  title: string;
  fields: ICategoryField[];
  machines: IMachineItem[];
  titleField: string;
}

interface ICategoriesState {
  categories: ICategory[];
}

interface IRootState {
  categories: ICategoriesState;
}
