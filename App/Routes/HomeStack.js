import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {MainScreen} from '../Screens';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const HomeNav = createStackNavigator();
export const HomeStack = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <HomeNav.Navigator initialRouteName="Home" >
          <HomeNav.Screen name="Home" component={MainScreen.home}  options={{ headerStyle: { backgroundColor: '#444' } }}/>
          <HomeNav.Screen name="About" component={MainScreen.about} />
          <HomeNav.Screen name="ReviewDetail" component={MainScreen.reviewdetail}    />
        </HomeNav.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
