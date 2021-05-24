import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "./Assets/Colors";

const StoCard = () => {
const [title,setTitle]=useState("Hello Riddhi")
const finalText="this is body text"

const onpressText=()=>
{
    setTitle("bye")
}
return(
    <>
    <Text style={styles.baseTitle}>
    <Text style={styles.otherText} onPress={onpressText}>{title}</Text>
    </Text>
    </>
)
};

const styles=StyleSheet.create({
    baseTitle:{
        color:Colors.white
    },
    otherText:
    {
        fontSize:20
    }
});

export default StoCard;