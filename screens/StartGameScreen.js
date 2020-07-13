import React,{useState} from 'react';
import {Alert,Dimensions,Keyboard,View,Text,StyleSheet,TouchableWithoutFeedback,Button} from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
const StartGameScreen=props=>{

    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false)
    const [selectedNumber,setSelectedNumber]=useState();

    const numberInputHandler=inputText=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler=()=>{
        var chosenNumber=parseInt(enteredValue);
        if(isNaN(chosenNumber)||chosenNumber<=0||chosenNumber>99){
            Alert.alert('Invalid number!','Number has to be a number between 1 and 99',[
                {text:'Ok',
                style:'destructive',
                onPress:resetInputHandler
            }
            ])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        
        Keyboard.dismiss();
    }
    let confirmedOutput;

    if(confirmed){
       confirmedOutput=<Card style={styles.summaryContainer}>
           <BodyText>You Selected </BodyText>
           <NumberContainer>
                {selectedNumber}
            </NumberContainer> 
            <MainButton onPress={()=>props.onStartGame(selectedNumber)}>
            START GAME
            </MainButton>
       </Card>
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>The Game Screen!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText style={styles.text}>Select a Number</BodyText>
                    <Input 
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        style={styles.input} 
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={()=>{resetInputHandler()}} color={Colors.accent}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={()=>{confirmInputHandler()}} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback> 
    )
};
const styles = StyleSheet.create({
    screen:{
        flex:1,//take all the space that he can get
        padding: 10,
        alignItems:'center',//align the items on the center horizontally
        justifyContent:'flex-start'
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold' 
    },
    inputContainer:{
        width:'80%',
        maxWidth:'95%',
        minWidth:300,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    button:{
        width:Dimensions.get('window').width/4
    },
    input:{
        width:50,
        marginBottom:10,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    },
    text:{
        fontFamily:'open-sans'
    }
})
export default StartGameScreen;