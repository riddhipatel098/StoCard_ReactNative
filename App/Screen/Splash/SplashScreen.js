import React, {useState, useEffect} from 'react';
import {styles} from './style';
import {images} from '../../Assets/index';
import {Header} from './Header';
import {TextItem} from './TextItem';


import {
  View,
  Text,
  ToastAndroid,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export const SplashScreen = () => {
 

  return (
      <>
      <Header/>
        <View style={styles.container}>
         {/* <Header/> */}
        <TextItem />
    </View>

    </>
  );
};
