
import { View, Text,TouchableOpacity } from 'react-native'
import styles from '../Styles'

export default function BottomNav({ setScreen, SignOut }) {
  return (
    <View style = {styles.bottomNavContainer}>
         
       <TouchableOpacity onPress = { () => setScreen(2) } >
            <View style = {styles.bottomSubNavSubContainer}>
            <Text style={styles.navItems}>Profile</Text>
            </View>
       </TouchableOpacity>

       <TouchableOpacity onPress = { () => setScreen(1) }>
       <View style = {styles.bottomSubNavSubContainer}>
            <Text style={styles.navItems}>Main</Text>
            </View>
       </TouchableOpacity>

       <TouchableOpacity onPress = { () => SignOut() }>
       <View style = {styles.bottomSubNavSubContainer}>
            <Text style={styles.navItems}>Sign Out</Text>
            </View>
       </TouchableOpacity>
       
    </View>
  )
}
