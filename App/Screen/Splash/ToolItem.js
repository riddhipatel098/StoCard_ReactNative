import React, {useState, useEffect} from 'react';
import { TouchableOpacity,StyleSheet,Text} from 'react-native';


export const ToolItem =({item,DeleteItem}) =>{

    return(
        <TouchableOpacity onPress={()=>DeleteItem(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    item:{
        padding:16,
        margin:10,
        borderEndColor:"#bbb",
        borderWidth:1,
        borderStyle:'dashed'
    }
})