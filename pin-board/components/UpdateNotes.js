import { useState } from 'react';
import { Text,View, TouchableOpacity } from 'react-native'
import { firestore, MESSAGES, doc, updateDoc, serverTimestamp } from '../firebase/Config';
import styles from '../Styles'

 /**
   * Update function and ternary for switching the edit button to orange and its functionality
   * And also if user doesn't write anything then presses send the original text will stay same 
   */

export default function UpdateNotes({text, setText,setSwitchToInput,switchToInput, id, selectID}) {

  const UpdateNote = () => { 
    if(text.length == 0) {
      setSwitchToInput(-1)
    } else {
        const docRef = doc(firestore,MESSAGES,id)
          updateDoc(docRef, {
            text : text,
            Added : serverTimestamp(),
          }).then( () => {
            console.log('updated')
          }).catch (error => console.log(error)) 
            setText('')
            setSwitchToInput(-1)    
    }
  }

  return ( 
    <View>
          { switchToInput !== selectID ? (
              <TouchableOpacity onPress = { () => { setSwitchToInput(selectID) }}>
                <Text style = { styles.btnUpdate }></Text>
              </TouchableOpacity>
          ) : (
              <TouchableOpacity onPress = { () => UpdateNote() }>
                <Text style = { [styles.btnUpdate, { backgroundColor : 'orange' }] }/>
              </TouchableOpacity>
          )
        }       
    </View>
  )
}
