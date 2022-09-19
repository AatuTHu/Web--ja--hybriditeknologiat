import { Text,View,Switch } from 'react-native'
import { useState } from 'react'
import style from '../Styles'

/**
 * Title component and a hint in disguise via switch button
 */

export default function Header() {

  const [ toggleHint , setToggleHint ] = useState(false)

  const toggleSwitch = () => setToggleHint(previousState => !previousState)

  return (<View>
            <View style = { style.titleContainer }>    
              <Text style = { style.Title }>Aatu's board</Text>
                <Switch value = { toggleHint } onValueChange = { toggleSwitch }/>
              </View>
            { toggleHint !== true ? (
                <Text></Text>
              ) : (
                <Text style = { style.hint }> Blue = Edit | Orange = Undo/Update| Red = Delete </Text>
              ) }
          </View>)
}
