import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { firestore,collection,addDoc,MESSAGES, serverTimestamp } from '../firebase/Config';
import  styles from '../Styles' 
import { useState } from 'react';

export default function AddNotes() {

    const [text, setText ] = useState("");

    const save = async() => {
      if(text.length == 0) {
        return alert('Write something')
      } else {
        const docRef = await addDoc(collection(firestore, MESSAGES), {
          text: text,
          Added: serverTimestamp(),
        }).catch (error => console.log(error))
        
        setText('')
        console.log('Message saved')
      }
    }
  
  return (
    <View> 
        <View style = { styles.addContainer }>          
                <TextInput style = { {marginLeft : 12 } } placeholder={'write a note'} value = {text} onChangeText = { text => setText(text) } multiline = { true } numberOfLines={6}/> 
                <TouchableOpacity onPress = { save }>
                    <View style = { styles.btnAdd}>
                        <Text style = { styles.text }>Add</Text>
                    </View>
            </TouchableOpacity>            
            </View>
    </View> 
  )
}
