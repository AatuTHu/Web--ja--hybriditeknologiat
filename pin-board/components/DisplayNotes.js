import { Text,View,TextInput } from 'react-native';
import { firestore,collection,MESSAGES, onSnapshot,querySnapshot, query, orderBy, signOut } from '../firebase/Config';
import { convertFirebaseTimeStampToJS } from '../helper/Functions';
import { useState, useEffect } from 'react'
import DeleteNotes from './DeleteNotes';
import UpdateNotes from './UpdateNotes';
import styles from '../Styles'

/**
 *  Map data to readable form. one ternary operator for if the user wants to edit text. 
 *  colorMania() is here to switch the backgroundColor of each note
 *  Also here we have buttons for delete and edit so that we can collect the document id and send it to them.
 */

export default function DisplayNotes() {

    const [notes, setNotes] = useState([])
    const [switchToInput, setSwitchToInput ] = useState(-1)
    const [text,setText] = useState('')
    const colors = [ '#bb6eff','#d1ff6e','#ff808a', '#fdb903' ];
    let colorId = 0 


    useEffect(() => {
        const q = query(collection(firestore,MESSAGES),orderBy('Added','desc'))
    
        const unsubscribe = onSnapshot(q,(querySnapshot) => {
          const tempMessages = []
    
          querySnapshot.forEach((doc) => {
            const messageObject = {
              id: doc.id,
              text: doc.data().text,
              Added: convertFirebaseTimeStampToJS(doc.data().Added)
            }
            tempMessages.push(messageObject)
          })
          setNotes(tempMessages)
        })
    
        return () => {
          unsubscribe()
        }
      }, [])

    const colorMania = () => {       
        if(colorId >= 3 ) { return colorId = 0 } else { return colorId = colorId+1 } 
    }

return ( 
        <View style = { styles.seprator }>
            {notes.map( (notes, key) => {
                return(
                    <View key = {notes.id} style = { [styles.noteContainer, { backgroundColor: colors[colorMania()] }] }>
                        <View  style = { styles.subNoteContainer }>
                            { switchToInput !== key ?  
                                ( <Text style = { styles.text }> {notes.text} </Text> )
                                :
                                ( <TextInput style = { styles.text } 
                                             placeholder={'Update a note'} 
                                             value = {text} onChangeText = { text => setText(text) } 
                                             multiline = { true } 
                                             numberOfLines={3}/> )
                            }
                            <UpdateNotes id = { notes.id } 
                                         switchToInput = { switchToInput } 
                                         setSwitchToInput = { setSwitchToInput } 
                                         text = { text } 
                                         setText = { setText } 
                                         selectID = { key }/>
                        </View>

                            <View style = { styles.seprator }/>

                                <View style = { styles.subNoteContainer }>
                                    <Text style = { styles.date }> {notes.Added} </Text>
                                        <DeleteNotes id = { notes.id }/>
                                    </View>
                        </View>
                )
            } )}     
        </View>
  )
}
