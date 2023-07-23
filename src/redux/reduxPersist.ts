import AsyncStorage from '@react-native-async-storage/async-storage';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

const categoriesReduxWhitelist = createWhitelistFilter('categories');

export const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  transforms: [categoriesReduxWhitelist],
  whitelist: ['categories'],
};
