import { firestore, deleteDoc, MESSAGES, doc } from '../firebase/Config';
import {TouchableOpacity , Text} from 'react-native'
import styles from '../Styles'

export default function DeleteNotes({ id }) {

    const deleteNote = () => {
        const docRef = doc(firestore,MESSAGES,id)
        deleteDoc(docRef)
        .then(() => {
            alert('Message deleted successfully')
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
