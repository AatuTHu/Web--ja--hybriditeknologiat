import { firestore, deleteDoc, MESSAGES, doc } from '../firebase/Config';
import {TouchableOpacity , Text} from 'react-native'
import styles from '../Styles'

/**
 * Nothing much to it, basic function and button for it
 */

export default function DeleteNotes({ id }) {

    const deleteNote = () => {
        const docRef = doc(firestore,MESSAGES,id)
        deleteDoc(docRef)
        .then(() => {
            console.log("Deleted")
        })
        .catch ( error => {
            console.log(error)
        })
    }

  return (
    <TouchableOpacity onPress = { deleteNote }>
        <Text style = { styles.btnDelete }></Text>
    </TouchableOpacity>
  )
}
