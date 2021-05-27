import React, {useState, useEffect} from 'react';
import { View,TouchableOpacity,StyleSheet,Text, TextInput, Button} from 'react-native';

export const AddToDo = ({submitToDo})=>
{
    const [text,setText]=useState('')

    const changeHandler =(val)=>
    {
        setText(val)
    }
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='add new'
            onChangeText={changeHandler}></TextInput>
            <Button onPress={()=>submitToDo(text)} title='ADD' color='coral'/>
        </View>
    )
}        
const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        color:'#444',
        borderBottomColor:'#444'
    }
})                                         