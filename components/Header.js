import React from 'react';
import {View,StyleSheet,Platform} from 'react-native';
import Colors from "../constants/colors";
import TitleText from "./TitleText"
const Header=props=>{
    return(
        <View style={{...styles.headerBase,
            ...Platform.select({
                ios:styles.headerIOS,
                android:styles.headerAndroid
            })
        }}>
           <TitleText>{props.title}</TitleText> 
        </View>
    )
}
const styles=StyleSheet.create({
    headerBase:{
        width:"100%",
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center',
    },
    headerIOS:{
        backgroundColor:Colors.accent,
        borderBottomColor:'#000000',
        borderBottomWidth:1
    },
    headerAndroid:{
        backgroundColor:Colors.primary,
        borderBottomColor:'#ccc',
        borderBottomWidth:2
    }
});
export default Header;