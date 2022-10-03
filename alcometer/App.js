import { StatusBar } from 'expo-status-bar';
import {  Text, View, ScrollView, TextInput, Button } from 'react-native';
import  StyleSheet from './Styles';
import Radiobutton from './components/Radiobutton';
import Dropdown from './components/Dropdown';
import React,{ useState } from 'react';

export default function App() {

  const [checked, setChecked] = useState(-1); //radiobutton switch
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [answer, setAnswer] = useState(0);
  


  const calculate = () => {
    const specialChars = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //special characters and letters
    if(weight.length == 0 || specialChars.test(weight)) { //check if weight has been given and it doesn't contain letters or special chars
      alert('Weight has not been given or it was not a number')
    } else if (checked == -1) {  //gender is not automatically selected, you have to choose.
        alert('Gender not selected')
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
           <TextInput style={StyleSheet.textInput} placeholder={"Weight"} keyboardType="numeric" value = {weight} onChangeText={ setWeight }/>

            <View style={StyleSheet.seprator}/>
              <Dropdown bottles = {bottles} setBottles = { setBottles } hours = { hours } setHours = { setHours }/>
                <View style={StyleSheet.seprator}/>

            <View style={StyleSheet.seprator}/>
              <Text style={StyleSheet.subTitle}>Gender</Text>
                <Radiobutton  checked = {checked} setChecked = {setChecked}/>
            
                <View style={StyleSheet.seprator}/>
                  <View style = {StyleSheet.answerContainer}>
                      <Text style = { [answer <= 0.5 ? StyleSheet.green : answer >= 0.5 && answer <= 1.2 ? StyleSheet.yellow : StyleSheet.red ]}>{answer}</Text>
                    <View style={StyleSheet.seprator}/>
                      <Button title = {'Calculate'} onPress = {() => calculate()}/>
                  </View>
                    
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

