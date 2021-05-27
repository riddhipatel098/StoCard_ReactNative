import React, {useState, useEffect} from 'react';
import {styles} from './style';
import {images} from '../../Assets/index';
import {ToolItem} from './ToolItem'
import {AddToDo} from './AddToDo'
import {
  View,
  Text,
  ToastAndroid,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export const TextItem = () => {
  const [title, setTitle] = useState([
    {name: 'riddhi', key: '1'},
    {name: 'siddhi', key: '2'},
    {name: 'shivani', key: '3'},
    {name: 'anjali', key: '4'},
  ]);

  const submitToDo=(text)=>
  {
    setTitle((prevTitle)=>{
        return[{name:text,key:Math.random().toString()},...prevTitle
        ]
    })
  }
  const DeleteItem=(id) =>
  {
    ToastAndroid.show(id, ToastAndroid.SHORT)
    setTitle((prevTitle)=>
    {
        return prevTitle.filter(people=>people.key!=id)
    })
  }
 
  return (
    <>
    
    <View style={styles.flatList}>
    <AddToDo submitToDo={submitToDo}/>
      <FlatList 
         keyExtractor={item => item.key}
        data={title}
        renderItem={({item}) => (
          <ToolItem item={item}   DeleteItem={DeleteItem}/>
          // <TouchableOpacity
          //   onPress={() => DeleteItem(item.key)}>
          //   <Text style={styles.textlist}>{item.name}</Text>
          // </TouchableOpacity>
        )}
      />
      
    </View>
   
    </>
  );
};
