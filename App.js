import React, {useState} from 'react';
import DrawerStack from './App/Navigation/DrawerStack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
