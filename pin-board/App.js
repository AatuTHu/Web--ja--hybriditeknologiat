import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { firestore,collection,MESSAGES, onSnapshot,querySnapshot, query, orderBy } from './firebase/Config';
import styles from './Styles';
import Header from './components/Header';
import DisplayNotes from './components/DisplayNotes';
import AddNotes from './components/AddNotes';
import { useState, useEffect } from 'react';
import { convertFirebaseTimeStampToJS } from './helper/Functions';



export default function App() {

  const [notes, setNotes] = useState([])

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

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header/>
          <AddNotes/>
            <DisplayNotes notes = { notes }/>
        <StatusBar
          style= 'auto'
          backgroundColor='#ffff'
        />       
      </ScrollView>
    </View>
  );
}