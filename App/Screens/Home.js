import React, { useState } from 'react';
import { View,Text, TouchableOpacity,FlatList } from 'react-native';
import { styles } from './styles';

export const Home = ({navigation}) => {

    const [reviews, seTreviews] = useState([
        {title:'Riddhi',rating:'5',body:'Hello Riddhi',key:'1'},
        {title:'Rima',rating:'4',body:'Hello Rima',key:'2'},
        {title:'Anjali',rating:'1',body:'Hello Anjali',key:'3'}
    ])

    return(
        <View style={styles.Container}>
        <FlatList
        data={reviews}
        renderItem={({ item })=>(
            <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetail',{data:item})}>
                <Text style={styles.baseText}>{ item.title }</Text>
            </TouchableOpacity>
        )}
        />
        </View>
    )
}