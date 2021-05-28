import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {MainScreen} from '../Screens';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';


const AboutNav = createStackNavigator();
export const AboutStack = () => {
  return (
  
   
        <AboutNav.Navigator initialRouteName="About" >
          <AboutNav.Screen name="About" component={MainScreen.about}  options={{ headerStyle: { backgroundColor: '#444' } }}/>
        </AboutNav.Navigator>
     
    
  );
};
