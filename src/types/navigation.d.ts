type ParamListBase =
  import('@react-navigation/routers/src/types').ParamListBase;
type StackNavigationProp<T, R> =
  import('@react-navigation/stack').StackNavigationProp<T, R>;
type RouteProp<T, R> = import('@react-navigation/native').RouteProp<T, R>;

type DrawerNavigationProp<T, R> =
  import('@react-navigation/drawer').DrawerNavigationProp<T, R>;

interface RootStackParamList extends ParamListBase {
  DrawerNavigator: PrimaryStackParamList;
}

interface DrawerParamList extends ParamListBase {
  Dashboard: undefined;
  ManageCategories: undefined;
}

type IDrawerNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  'DrawerNavigator'
>;

type IProductDetailRouteProp = RouteProp<
  Record<string, ProductDetailsRoutePropType>,
  string
>;
