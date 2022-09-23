import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../Styles'



export default function Profile({displayName, setScreen, email}) {
  return (
  <View>
    <View style = { styles.generalContainer } >
        <Text style = { styles.subTitle} > { displayName } </Text>
        <Text style = { styles.subTitle} >  { email }</Text>
        <TouchableOpacity onPress = { () => setScreen(3) } >
          <View style = { styles.btnUpdate }></View>
        </TouchableOpacity>
    </View>
      <View style = { styles.generalContainer }>
        <Text style = { [styles.subTitle, {fontSize : 20}] }>Your messages</Text>
      </View>
  </View>
  )
}
