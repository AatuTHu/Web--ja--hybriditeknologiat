import { Text,View } from 'react-native'
import style from '../Styles'

export default function Header() {
  return (
    <View style = { style.titleContainer }>    
      <Text style = { style.Title }>Aatu's board</Text>
    </View>

  )
}
