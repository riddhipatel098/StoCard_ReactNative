import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeStack} from './HomeStack';
import {AboutStack} from './AboutStack'
import { Colors } from '../Assets/Colors/Colors';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
  
      <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{
        activeTintColor: Colors.sand,
        itemStyle: { marginVertical: 5 },
      }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Notifications" component={AboutStack} />
      </Drawer.Navigator>
    
  );
}