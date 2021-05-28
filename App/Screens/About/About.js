import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export const About = ({navigation}) => {
    return(
        <View style={styles.Container}>
             <TouchableOpacity  onPress={()=>navigation.navigate('ReviewDetail')}>
            <Text>About Screen</Text>
            </TouchableOpacity>
        </View>
    )
}