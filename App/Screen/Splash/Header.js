import React,{useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Colors } from '../../Assets/Color/Colors';

export const Header= () =>
{
    const [header, setheader] = useState("ToDo");

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{header}</Text>
        </View>
    )
   
}

const styles=StyleSheet.create(
    {
    
        container:
        {   
            height:80,
            paddingTop:20,
            alignItems:'center',
            backgroundColor:'coral'
        },
        title:
        {
          
            fontSize:20,
        }
    }
)
