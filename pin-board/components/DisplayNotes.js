import { Text,View,TextInput } from 'react-native';
import { firestore,collection,MESSAGES, onSnapshot, query, orderBy, where } from '../firebase/Config';
import { convertFirebaseTimeStampToJS } from '../helper/Functions';
import { useState, useEffect } from 'react'
import DeleteNotes from './DeleteNotes';
import UpdateNotes from './UpdateNotes';
import styles from '../Styles'


export default function DisplayNotes({ screen, uId }) {

    const [notes, setNotes] = useState([])
    const [profileNotes, setProfileNotes ] = useState([])
    const [switchToInput, setSwitchToInput ] = useState(-1)
    const [text,setText] = useState('')
    const colors = [ '#bb6eff','#d1ff6e','#ff808a', '#fdb903' ];
    let colorId = 0 


    useEffect(() => {
      const q = query(collection(firestore,MESSAGES), where("uId", "==", uId))
  
      const unsubscribe = onSnapshot(q,(querySnapshot) => {
        const tempMessages = []
  
        querySnapshot.forEach((doc) => {
          const messageObject = {
            id: doc.id,
            text: doc.data().text,
            uId : doc.data().uId,
            displayName : doc.data().displayName, 
            Added: convertFirebaseTimeStampToJS(doc.data().Added)
          }
          tempMessages.push(messageObject)
        })
        setProfileNotes(tempMessages)
      })
  
      return () => {
        unsubscribe()
      }
    }, [])

    useEffect(() => {
        const q = query(collection(firestore,MESSAGES),orderBy('Added','desc'))
    
        const unsubscribe = onSnapshot(q,(querySnapshot) => {
          const tempMessages = []
    
          querySnapshot.forEach((doc) => {
            const messageObject = {
              id: doc.id,
              text: doc.data().text,
              uId : doc.data().uId,
              displayName : doc.data().displayName, 
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

if ( screen == 1) {
  return ( 
          <View style = { styles.seprator }>
              {notes.map( (notes, key) => {   
                  return(
                      <View key = {notes.id} style = { [styles.noteContainer, { backgroundColor: colors[colorMania()] }] }>
                          <View  style = { styles.subNoteContainer }>
                            <Text style = { styles.text }> {notes.text} </Text> 
                          </View>
                              <View style = { styles.seprator }/>
                                  <View style = { styles.subNoteContainer }>
                                      <Text style = { styles.date }> { notes.displayName } </Text>
                                      <Text style = { styles.date }> {notes.Added} </Text>     
                                  </View>
                          </View>
                  )
              })}     
          </View>
    )
} else if ( screen == 2) {
    return (
      <View style = { styles.seprator }>
              {profileNotes.map( (profileNotes, key) => {   
                  return(
                      <View key = {profileNotes.id} style = { [styles.noteContainer, { backgroundColor: colors[colorMania()] }] }>
                          <View  style = { styles.subNoteContainer }>
                              { switchToInput !== key ?  
                                  ( <Text style = { styles.text }> {profileNotes.text} </Text> )
                                  :
                                  ( <TextInput style = { styles.text } 
                                              placeholder={'Update a note'} 
                                              value = {text} 
                                              onChangeText = { text => setText(text) } 
                                              multiline = { true } 
                                              numberOfLines={3}/> )
                              }
                              <UpdateNotes id = { profileNotes.id } 
                                            switchToInput = { switchToInput } 
                                            setSwitchToInput = { setSwitchToInput } 
                                            text = { text } 
                                            setText = { setText } 
                                            selectID = { key }/>
                          </View>

                              <View style = { styles.seprator }/>

                                  <View style = { styles.subNoteContainer }>
                                      <Text style = { styles.date }> { profileNotes.displayName } </Text>
                                      <Text style = { styles.date }> {profileNotes.Added} </Text>
                                          <DeleteNotes id = { profileNotes.id }/>
                                      </View>
                          </View>
                  )
              })}     
          </View>
    )
}
} 

