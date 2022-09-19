import { Text,View,TextInput } from 'react-native';
import { useState } from 'react'
import DeleteNotes from './DeleteNotes';
import UpdateNotes from './UpdateNotes';
import styles from '../Styles'


export default function DisplayNotes(props) {

    const [showInput, setShowInput ] = useState(false)
    const [text,setText] = useState('')
    

return ( 
        <View style = { styles.seprator }>
            {props.notes.map( p => {
                return(
                    <View key = {p.id} style = { styles.noteContainer }>

                        <View style = { styles.subNoteContainer }>
                            { showInput ? 
                                ( <Text> {p.text} </Text> ) 
                                :
                                ( <TextInput style = { {width : '85%' } } placeholder={'Update a note'} value = {text} onChangeText = { text => setText(text) } multiline = { true } numberOfLines={3}/> )
                            }
                            <UpdateNotes id = { p.id } showInput = { showInput } setShowInput = { setShowInput } text = { text } setText = { setText }/>
                        </View>

                            <View style = { styles.seprator }/>

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
