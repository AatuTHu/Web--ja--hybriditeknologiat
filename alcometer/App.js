import { StatusBar } from 'expo-status-bar';
import {  Text, View, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import  StyleSheet from './Styles';
import Radiobutton from './components/Radiobutton';
import NumericInput from 'react-native-numeric-input';
import React,{ useState } from 'react';

export default function App() {

  const [checked, setChecked] = useState(0); //radiobutton switch
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [answer, setAnswer] = useState(0);
  


  const calculate = () => {
    const specialChars = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //special characters and letters
    if(weight.length == 0 || specialChars.test(weight)) { //check if weight has been given and it doesn't contain letters or special chars
      alert('Weight has not been given or it was not a number')
    } else {   
        let type = checked == 0 ? type = 0.7  : type = 0.6 // if male = 0.7, females = 0.6
          let result = ((bottles*0.33)*8*4.5 - (hours*(weight / 10)))/(weight*type); //calculation for blood alcohol level

        if(result > 0) {
          setAnswer(result.toFixed(2)); //format answer to two decimals
        } else { 
          setAnswer(0.00); //if result is 0 or negative set answer to 0
        }
  }
  };

    

    
    

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <Text style={StyleSheet.title}>Alcometer</Text>
          <Text style={StyleSheet.subTitle}>Weight</Text>
           <TextInput style={StyleSheet.textInput} placeholder={"Weight"} keyboardType="numeric" value = {weight} onChangeText={ setWeight }></TextInput>

            <View style={StyleSheet.seprator}/>
              <Text style={StyleSheet.subTitle}>Bottles</Text>
            <NumericInput type='up-down' onChange={value => setBottles(value)}
                                         totalWidth={325} 
                                         totalHeight={45}
                                         minValue={0}
            />
            
            <View style={StyleSheet.seprator}/>
              <Text style={StyleSheet.subTitle}>Hours</Text>
            <NumericInput type='up-down' onChange={value => setHours(value)}
                                         totalWidth={325} 
                                         totalHeight={45}
                                         minValue={0}
            />

            <View style={StyleSheet.seprator}/>
              <Text style={StyleSheet.subTitle}>Gender</Text>
                <Radiobutton  checked = {checked} setChecked = {setChecked}/>
            
                <View style={StyleSheet.seprator}/>
                  <View style = {StyleSheet.answerContainer}>
                      <Text style = { [answer <= 0.5 ? StyleSheet.green : answer >= 0.5 && answer <= 1.2 ? StyleSheet.yellow : StyleSheet.red ]}>{answer}</Text>
                  </View>
                    <Button title = {'Calculate'} onPress = {() => calculate()}/>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

