import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {MainScreen} from '../Screens';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Colors } from '../Assets/Colors/Colors';

const HomeNav = createStackNavigator();

const NavigationDrawerStructure = props => {

  const toggleDrawer = () => {
  
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const HomeStack = ({navigation}) => {
  return (
    <HomeNav.Navigator initialRouteName="Home">
      <HomeNav.Screen
        name="Home"
        component={MainScreen.home}
        options={{
          title: 'Stocard', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Colors.grass, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <HomeNav.Screen name="ReviewDetail" component={MainScreen.reviewdetail} />
    </HomeNav.Navigator>
  );
};
