import React from 'react';
import {View,StyleSheet,Button,Text, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";
const GameOverScreen=props=>{
    return(
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imgContainer}>
                 <Image resizeMode="cover" style={styles.img} source={require('../assets/img/success.png')}/> 
                {/* <Image 
                resizeMode="cover" 
                style={styles.img} 
                fadeDuration={120}
                source={{uri:'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}/> */}
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{ props.roundsNumber }</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>
            NEW GAME
            </MainButton>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:30
    },
    highlight:{
        color:Colors.primary,
        fontFamily:'open-sans-bold'
    },
    imgContainer:{
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        width:300,
        height:300,
        overflow:'hidden',
        margin:30
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical:15
    },
    resultText:{
        textAlign:'center',
        fontSize:20
    }
});
export default GameOverScreen;