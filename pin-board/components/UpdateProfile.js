import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import { getAuth, updateProfile } from '../firebase/Config'
import styles from '../Styles'

export default function UpdateProfile({displayName,email,setDisplayName,setEmail,setScreen}) {

    const updateAccount = () => {
        const auth = getAuth()
        updateProfile(auth.currentUser, {
            displayName: displayName,
            email: email,
        }).then(() => {
            setScreen(2)
        }).catch((error) => {
            console.log(error)
        })
    } 


  return ( <View style = { styles.generalContainer }>  
    <Text style = { styles.text }>Current dispalyname : { displayName } </Text>
        <TextInput placeholder='type Displayname' value = { displayName } onChangeText = { setDisplayName }></TextInput>
    <View style = { styles.seprator } />
        <Text style = { styles.text }>Current email : { email } </Text>
    <TextInput placeholder='type Email' value = { email } onChangeText = { setEmail }></TextInput>
        <View style = { styles.seprator } />
    <TouchableOpacity onPress = { () => updateAccount() } >
        <View style = { styles.btnAdd }>
            <Text>Save</Text>
        </View>
    </TouchableOpacity>
</View>)
}
