import {View, Text, TouchableOpacity} from 'react-native'
import StyleSheet from '../Styles'
import {useState} from 'react'

export default function Dropdown({bottles, setBottles, hours, setHours}) {

    const [chooseBottles, setChooseBottles] = useState(false)
    const [chooseHours, setChooseHours] = useState(false)
    const data = Array.from(Array(25).keys())
    
    const eventBottles = (key) => {
        setBottles(key)
        setChooseBottles(!chooseBottles)
    }

    const eventHours = (key) => {
        setHours(key)
        setChooseHours(!chooseHours)
    }
    

  return (<View>      
            <Text style = { StyleSheet.subTitle }>Bottles</Text>
        <TouchableOpacity onPress = { () => setChooseBottles(!chooseBottles)}>
            <Text style = { StyleSheet.dropDownTitles }>{bottles} Bottles selected</Text>
                <View stlye = { StyleSheet.seprator }/>
        </TouchableOpacity>
            {!chooseBottles ? (
                    <View></View>
                ):(<View style =  {StyleSheet.dropDownContainer}>
                    {data.map((data, key) => {
                        return( <View key = {data}>
                        <TouchableOpacity onPress = { () => eventBottles(key) } >
                                <View>
                                    <Text style = {StyleSheet.dropDownItems}>{data} Bottles</Text>
                                </View>
                            </TouchableOpacity>   
                        </View>   
                        )
                    })}
                    </View>
                )}

        <View style = {StyleSheet.seprator}/>
            <Text style = { StyleSheet.subTitle }>Bottles</Text>
        <TouchableOpacity onPress = { () => setChooseHours(!chooseHours)}>
                <Text style = { StyleSheet.dropDownTitles }>{hours} Hours selected</Text>
                    <View stlye = { StyleSheet.seprator }/>
        </TouchableOpacity>
            {!chooseHours ? (
                    <View></View>
                ):(<View style =  {StyleSheet.dropDownContainer}>
                    {data.map((data, key) => {
                        return( <View key = {data}>
                        <TouchableOpacity onPress = { () => eventHours(key) } >
                                <View>
                                    <Text style = {StyleSheet.dropDownItems}>{data} hours</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>   
                        )
                    })}
                    </View>
                )}
    </View>)
}
