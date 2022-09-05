import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'

export default function App() {

  
  const [checked, setChecked] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [answer, setAnswer] = useState(0)
  var gender = ['Male','Female'];


  const calculate = () => {
    
    let litres = bottles * 0.33;
    let grams = litres*8*4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (hours*burning)
    let type;

    if(checked == 0) {
      type = 0.7
    } else {
      type = 0.6
    }

    setAnswer ( gramsLeft/(weight*type) )
  }

    

    
    

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Alcometer</Text>
          <Text style={styles.subTitle}>Weight</Text>
           <TextInput style={styles.textInput} placeholder={"Weight"} keyboardType="number-pad" onChangeText={ value => setWeight(value)}></TextInput>

            <View style={styles.seprator}/>
              <Text style={styles.subTitle}>Bottles</Text>
            <NumericInput type='up-down' onChange={value => setBottles(value)}
                                         totalWidth={325} 
                                         totalHeight={45}
                                         minValue={0}
            />
            
            <View style={styles.seprator}/>
              <Text style={styles.subTitle}>Hours</Text>
            <NumericInput type='up-down' onChange={value => setHours(value)}
                                         totalWidth={325} 
                                         totalHeight={45}
                                         minValue={0}
            />

            <View style={styles.seprator}/>
              <Text style={styles.subTitle}>Gender</Text>

                <View style = { styles.radioContainer}>
                  {gender.map((gender, key) => {
                      return(
                        <View key={gender}>
                          {checked == key ? (
                            <View>
                              <Text style = { styles.Text }> { gender }</Text>
                            <TouchableOpacity style={styles.radioBtn}>   
                              <View style = { styles.selectedRadioBtn}/>
                            </TouchableOpacity>
                          </View>
                          ) : (
                            <View>
                              <Text> { gender }</Text>
                                <TouchableOpacity style={styles.radioBtn} onPress={() => { setChecked(key) }}>
                                  <View style = {styles.unselected}></View>                         
                                </TouchableOpacity>
                              </View>
                          )}
                      </View>
                      )
                  })}
                </View>

                <View style={styles.seprator}/>
                  <View style = {styles.answerContainer}>
                     <Text style = {styles.answerText}>{answer.toFixed(2)}</Text>
                  </View>
                    <Button title = {'Calculate'} onPress = {() => calculate()}></Button>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 24,
    padding: 15, 
  },
  title: {
    textAlign: 'center',
    width: '100%',
    height: 100,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00BFFF',
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    backgroundColor: 'lightGrey',
  },
  seprator: {
    height: 10,
    width: 200,
    margin: 10,
  },
  radioContainer: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radioBtn: {
    height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
  },
  selectedRadioBtn: {  
      width: 15,
      height: 15,
      borderRadius: 50,
      backgroundColor: '#3740ff',   
  },
  unselectedRadioBtn: {
    backgroundColor: '#fff'
  }, 
  Text: {
    fontSize: 18
  },
  answerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  answerText : {
    fontSize: 40,
    color: "green",
  },

});
