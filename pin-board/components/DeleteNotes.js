import { firestore, deleteDoc, MESSAGES, doc } from '../firebase/Config';
import {TouchableOpacity , Text} from 'react-native'
import styles from '../Styles'

export default function DeleteNotes(props) {

    const deleteNote = () => {
        const docRef = doc(firestore,MESSAGES,props.id)
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
