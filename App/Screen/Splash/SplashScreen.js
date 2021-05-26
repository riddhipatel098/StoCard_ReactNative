import React, {useState, useEffect} from 'react';
import {styles} from './style';
import {images} from '../../Assets/index';
import Toast from 'react-native-toast-message';
//import createSagaMiddleware from 'redux-saga';

import {
  View,
  Text,
  ToastAndroid,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export const SplashScreen = () => {
  const [title, setTitle] = useState([
    {name: 'riddhi', key: '1'},
    {name: 'siddhi', key: '2'},
    {name: 'shivani', key: '3'},
    {name: 'anjali', key: '4'},
  ]);


  const PressPrint=(id) =>
  {
    ToastAndroid.show(id, ToastAndroid.SHORT)
    setTitle((prevTitle)=>
    {
        return prevTitle.filter(people=>people.key!=id)
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.key}
        data={title}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => PressPrint(item.key)}>
            <Text style={styles.textlist}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* {
            title.map(item=>{
                
                    <View key={item.key}>
                        <Text >
                            {item.name}
                        </Text>
                    </View
                
            })
        } */}
    </View>
  );
};
