import { Text,View, TouchableOpacity } from 'react-native'
import { firestore, MESSAGES, doc, updateDoc, serverTimestamp } from '../firebase/Config';
import styles from '../Styles'

export default function UpdateNotes(props) {

  const UpdateNote = () => {
    console.log(props.text)
    const docRef = doc(firestore,MESSAGES,props.id)

    updateDoc(docRef, {
      text : props.text,
      Added : serverTimestamp(),
    }).catch (error => console.log(error))
    props.setShowInput(!props.showInput)
    props.setText('')
  }

  return ( 
    <View>
          { props.showInput == true ? (
            <TouchableOpacity onPress = { () => { props.setShowInput(!props.showInput) }}>
            <Text style = { styles.btnUpdate }/>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress = { () => UpdateNote() }>
            <Text style = { [styles.btnUpdate, { backgroundColor : 'green' }] }/>
            </TouchableOpacity>
          )
        }       
    </View>
  )
}
