import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AuthNavigator from './AuthNavigator';
import { SafeAreaView } from 'react-native';
import { CommonStyles } from '../theme';
import DrawerNavigator from './DrawerNavigator';

const RootNavigator = () => {
  return (
    <SafeAreaView style={CommonStyles.flex}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
