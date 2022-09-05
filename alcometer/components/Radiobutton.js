import {View, Text, TouchableOpacity} from 'react-native'
import StyleSheet from '../Styles'

export default function Radiobutton({ checked, setChecked}) {

  const gender = ['Male','Female']; // genders

  return ( 
        <View style = { StyleSheet.radioContainer}>
                  {gender.map((gender, key) => {
                      return(
                        <View key={gender}>
                          {checked == key ? (
                            <View>
                              <Text style = { StyleSheet.Text }> { gender }</Text>
                            <TouchableOpacity style={StyleSheet.radioBtn}>   
                              <View style = { StyleSheet.selectedRadioBtn}/>
                            </TouchableOpacity>
                          </View>
                          ) : (
                            <View>
                              <Text> { gender }</Text>
                                <TouchableOpacity style={StyleSheet.radioBtn} onPress={() => { setChecked(key) }}>
                                  <View style = {StyleSheet.unselected}></View>                         
                                </TouchableOpacity>
                              </View>
                          )}
                      </View>
                      )
                  })}
                </View>
   )
}
