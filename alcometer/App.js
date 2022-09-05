import { StatusBar } from 'expo-status-bar';
import {  Text, View, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import  StyleSheet from './Styles'
import Radiobutton from './components/Radiobutton';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'

export default function App() {

  
  const [checked, setChecked] = useState(0);
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [answer, setAnswer] = useState(0)
  var gender = ['Male','Female'];


  const calculate = () => {
    const specialChars = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let type;
    if(weight.length == 0 || !parseInt(weight) || specialChars.test(weight)) {
      alert('Weight has not been given, or was not a number')
    } else {
      if(checked == 0) { type = 0.7 } else { type = 0.6 };
        let result = ((bottles*0.33)*8*4.5 - (hours*(weight / 10)))/(weight*type)

        if(result >= 0) {
          setAnswer(result.toFixed(2))
        } else {
          setAnswer(0.00)
          alert('You have no alcohol in your blood')
        }
  }
  }

    

    
    

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <Text style={StyleSheet.title}>Alcometer</Text>
          <Text style={StyleSheet.subTitle}>Weight</Text>
           <TextInput style={StyleSheet.textInput} placeholder={"Weight"} keyboardType="numeric" onChangeText={ value => setWeight(value)}></TextInput>

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
                <Radiobutton gender={gender} checked = {checked} setChecked = {setChecked}/>
            
                <View style={StyleSheet.seprator}/>
                  <View style = {StyleSheet.answerContainer}>
                      <Text style = { [answer <= 0.5 ? StyleSheet.green : answer >= 0.5 && answer <= 1.2 ? StyleSheet.yellow :  StyleSheet.red ]}>{answer}</Text>
                  </View>
                    <Button title = {'Calculate'} onPress = {() => calculate()}></Button>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

