import { StyleSheet } from "react-native";
import { Colors } from "../../Assets/Color/Colors";
import { colors } from "../../Assets/index";
export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.white
    },
    logo:{
        width:200  ,
        height:200 
     },
    footer:{
        position:'absolute',
        bottom:'5%'
       },
       label:{
           textAlign:'center',
           fontWeight:'bold',
           color:colors.primary
           
       },
       subLabel:{
           fontSize:15,
           marginTop:5,
           color:colors.gray
       },
       textlist:
       {
        margin:20
       }
})