import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'

export default function App() {

  
  const [toggleRadio, setToggleRadio] = useState(false)
  const [man, setMan] = useState(false)
  const [woman, setWoman] = useState(true)
  const [gender, setGender] = useState(0)


    const toggleRadioBtn = () => { 
      setToggleRadio(!toggleRadio)   
    }

    const renderRadio = () => {
      if(toggleRadio) {
        return (<View></View>)
      } else {
        return (<View style = { styles.selectedRadioBtn }></View>)
      }
    }

      
    

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Alcometer</Text>
          <Text style={styles.subTitle}>Weight</Text>
           <TextInput style={styles.textInput} placeholder={"Weight"} keyboardType="number-pad"></TextInput>

            <View style={styles.seprator}/>
              <Text style={styles.subTitle}>Bottles</Text>
            <NumericInput type='up-down' onChange={value => console.log(value)}
                                         totalWidth={325} 
                                         totalHeight={45}
                                         minValue={0}
            />
            
            <View style={styles.seprator}/>
              <Text style={styles.subTitle}>Hours</Text>
            <NumericInput type='up-down' onChange={value => console.log(value)}
                                         totalWidth={325} 
                                         totalHeight={45}
                                         minValue={0}
            />

            <View style={styles.seprator}/>
            <Text style={styles.subTitle}>Gender</Text>
              <View style={styles.radioContainer}>
                <Text>Male</Text> 
                  <TouchableOpacity style = { styles.radioBtn } onPress={() => toggleRadioBtn()}>
                      {renderRadio()}
                  </TouchableOpacity>
              </View>

              <View style={styles.radioContainer}>
                <Text>Female</Text> 
                  <TouchableOpacity style = { styles.radioBtn } onPress={() => toggleRadioBtn() } >
                      {renderRadio()}
                  </TouchableOpacity>
              </View>

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
    margin: 20,
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
});
