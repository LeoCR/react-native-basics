import React from 'react';
import {View,StyleSheet,Platform} from 'react-native';
import Colors from "../constants/colors";
import TitleText from "./TitleText"
const Header=props=>{
    return(
        <View style={styles.header}>
           <TitleText>{props.title}</TitleText> 
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        width:"100%",
        height:90,
        paddingTop:36,
        backgroundColor:Platform.OS==='android'?Colors.primary:Colors.accent,
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:Platform.OS==='ios'?'#000000':'#ccc',
        borderBottomWidth:2
    }
});
export default Header;