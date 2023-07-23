import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard, Machines, ManageCategories } from '../screens';
import { DRAWER_ROUTES } from '../constants';
import { useAppSelector } from '../redux/Hooks';
import { categoriesSelector } from '../redux/selectors';
import styles from './styles';
import { APP_TEXT } from '../strings';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  const { categories } = useAppSelector(categoriesSelector);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        drawerLabelStyle: styles.drawerLabel,
        drawerType: 'front',
        drawerContentContainerStyle: styles.drawerContainer,
      }}>
      <Drawer.Screen name={DRAWER_ROUTES.Dashboard} component={Dashboard} />
      <Drawer.Screen
        name={DRAWER_ROUTES.ManageCategories}
        component={ManageCategories}
        options={{
          headerTitle: APP_TEXT.manageCategories,
          drawerLabel: APP_TEXT.manageCategories,
        }}
      />
      {categories?.map((cat, index) => (
        <Drawer.Screen
          key={cat?.id}
          name={
            cat.title?.length > 0
              ? cat?.title
              : `${APP_TEXT.unnamedCategory}  ${index}`
          }
          component={Machines}
          initialParams={{ category: cat }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
