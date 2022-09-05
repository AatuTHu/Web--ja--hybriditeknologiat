import {View, Text, TouchableOpacity} from 'react-native'
import StyleSheet from '../Styles'

export default function Radiobutton({gender, checked, setChecked}) {
  return ( 
        <View style = { StyleSheet.radioContainer}>
                  {gender.map((item, key) => {
                      return(
                        <View key={item.gender}>
                          {checked == key ? (
                            <View>
                              <Text style = { StyleSheet.Text }> { item.gender }</Text>
                            <TouchableOpacity style={StyleSheet.radioBtn}>   
                              <View style = { StyleSheet.selectedRadioBtn}/>
                            </TouchableOpacity>
                          </View>
                          ) : (
                            <View>
                              <Text> { item.gender }</Text>
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
