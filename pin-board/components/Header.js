import { Text,View } from 'react-native'
import style from '../Styles'

export default function Header({Title}) {
  return (
            <View style = { style.titleContainer }>    
              <Text style = { style.Title }> { Title } </Text>
            </View>       
         )
}
