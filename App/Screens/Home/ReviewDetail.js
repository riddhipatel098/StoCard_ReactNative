import React from 'react';
import { View,Text } from 'react-native';
import { styles } from '../styles';

export const ReviewDetail = ({navigation,route}) => {
    let item = route.params.data;
    return(
        <View style={styles.Container}>
            <Text>{item.title}</Text>
        </View>
    )
}