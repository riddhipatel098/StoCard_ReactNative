import React from 'react';
import {StyleSheet} from 'react-native';
import { Colors } from '../Assets/Colors/Colors';
export const styles=StyleSheet.create({

    Container:
    {
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    baseText:
    {
        fontFamily:'Nunito-Regular',
        fontSize:17,
        color:Colors.gray
    }
})