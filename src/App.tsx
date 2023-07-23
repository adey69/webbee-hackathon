/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Suspense } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { RootNavigator } from './navigators';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MenuProvider>
            <RootNavigator />
          </MenuProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
};

export default App;
