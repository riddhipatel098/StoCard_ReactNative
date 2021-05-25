import React,{useState} from 'react';
import {styles} from './style';
import {images} from '../../Assets/index'
//import createSagaMiddleware from 'redux-saga';

import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';

export const SplashScreen = () =>
{
 const [title, setTitle] = useState(
    [
        {name:'riddhi',key:'1'},
        {name:'siddhi',key:'2'},
        {name:'shivani',key:'3'},
        {name:'anjali',key:'4'}
    ]
    )

//  const clickText = () =>
//  {
//     setTitle("Riddhi")
//  };
    return(
        <View style={styles.container}>
            <FlatList
            
            numColumns={2}
            keyExtractor={(item)=>item.key}
            data={title}
            renderItem={({item})=>
            <Text>{item.name}</Text>}/>
        {/* {
            title.map(item=>{
                
                    <View key={item.key}>
                        <Text >
                            {item.name}
                        </Text>
                    </View>
                
            })
        } */}
        
        </View>
    );
};