import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { firestore,collection,addDoc,MESSAGES, serverTimestamp } from '../firebase/Config';
import  styles from '../Styles' 
import { useState } from 'react';


export default function AddNotes({ uId, displayName}) {

    const [text, setText ] = useState(""); 
    const [placeholder,setPlaceholder] = useState('Write a note')

    const save = async() => {
      if(text.length == 0) {
        setPlaceholder('Write shometing')
      } else {
        const docRef = await addDoc(collection(firestore, MESSAGES), {
          text: text,
          displayName: displayName,
          uId : uId, 
          Added: serverTimestamp(),
        }).catch (error => console.log(error))
        
        setText('')
        setPlaceholder('Write a note')
      }
    }
  
  return (
    <View> 
      <View style = { styles.generalContainer }>          
        <TextInput placeholder={ placeholder } value = {text} onChangeText = { text => setText(text) } multiline = { true } numberOfLines={6}/> 
          <TouchableOpacity onPress = { save }>
            <View style = { styles.btnAdd}>
              <Text style = { styles.text }>Add</Text>
            </View>
          </TouchableOpacity>            
        </View>
      </View> 
  )
}
