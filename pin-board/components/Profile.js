import { View, Text, TouchableOpacity } from 'react-native'
import { firestore,collection,MESSAGES, onSnapshot, query, where } from '../firebase/Config';
import { convertFirebaseTimeStampToJS } from '../helper/Functions';
import { useState, useEffect } from 'react'
import DisplayNotes from './DisplayNotes';
import styles from '../Styles'
import AddNotes from './AddNotes';



export default function Profile({displayName, setScreen, email, uId, screen}) {

  const [profileNotes, setProfileNotes ] = useState([])
  const [addNotesVisible, setAddNotesVisible] = useState(false)

  useEffect(() => {
    const q = query(collection(firestore,MESSAGES), where("uId", "==", uId))

    const queryProfNotes = onSnapshot(q,(querySnapshot) => {
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
      queryProfNotes()
    }
  }, [])

  return (
  <View>
    <View style = { styles.generalContainer } >
        <Text style = { styles.subTitle} >{ displayName } </Text>
        <Text style = { styles.subTitle} >{ email }</Text>
        <TouchableOpacity onPress = { () => setScreen(3) } >
          <View style = { styles.btnUpdate }></View>
        </TouchableOpacity>
    </View>
      <View style = { [styles.generalContainer, {backgroundColor: '#26A557'} ] }>
        <TouchableOpacity onPress = { () => setAddNotesVisible(!addNotesVisible) }>
          <Text style = { styles.subTitle }>Add notes?</Text>
        </TouchableOpacity>
      </View>

      { addNotesVisible ? ( <AddNotes uId={ uId } displayName = { displayName } /> ) : (<View></View>) }

        <View style = { styles.generalContainer }>
          <Text style = { [styles.subTitle, {fontSize : 20}] }>Your notes</Text>
      </View>
      <DisplayNotes screen = { screen } uId = { uId } profileNotes = { profileNotes } />
  </View>
  )
}
