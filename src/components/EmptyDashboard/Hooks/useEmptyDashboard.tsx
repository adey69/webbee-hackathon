import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { DRAWER_ROUTES } from '../../../constants';

export default () => {
  const navigation = useNavigation<IDrawerNavigationProp>();
  const onButtonPressed = useCallback(() => {
    navigation.navigate(DRAWER_ROUTES.ManageCategories);
  }, []);

  return {
    onButtonPressed,
  };
};
