import { Text,View } from 'react-native'
import DeleteNotes from './DeleteNotes';
import styles from '../Styles'


export default function DisplayNotes(props) {
  return ( 
        <View style = { styles.seprator }>
            {props.notes.map( p => {
                return(
                    <View key = {p.id} style = { styles.noteContainer }>
                        <Text> {p.text} </Text>
                        <View style = { styles.subNoteContainer }>
                            <Text> {p.Added} </Text>
                            <DeleteNotes id = { p.id }/>
                        </View>
                        
                </View>
                )
            } )}
            
        </View>
  )
}
