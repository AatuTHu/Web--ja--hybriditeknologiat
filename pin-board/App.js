import { StatusBar } from 'expo-status-bar';
import { View, ScrollView,Text } from 'react-native';
import styles from './Styles';
import Header from './components/Header';
import DisplayNotes from './components/DisplayNotes';
import AddNotes from './components/AddNotes';
import Login from './components/Login';
import BottomNav from './components/BottomNav';
import { useState } from 'react';

/**
  * draws header, addNotes, dispaly and BottomNav components
 */

export default function App() {
  
  
  const [ loggedIn, setLogged ] = useState(false)
  const [ screen, setScreen ] = useState(1)

  const screenNavigation = () => {
    switch (screen) { 
      case 1: 
      return (
      <ScrollView>
        <Header/>
          <AddNotes/>
        <DisplayNotes/>       
      </ScrollView> );
  
       case 2:
       return (
        <ScrollView>
          <Text>moro</Text>
        </ScrollView>);
        case 3: 
        return (
          <ScrollView>
          <Text>tere!</Text>
          </ScrollView>);   
    }
   }

  
  if ( !loggedIn ) {
  return (
  <View style = {styles.container}>
    
    {screenNavigation()}
        
    <BottomNav setScreen = { setScreen }/>
    <StatusBar
        style= 'auto'
        backgroundColor='#ffff'/>
    </View>
  );
} else {
  return  (<View style = { styles.container }>
            <ScrollView>
              <Login setLogged = { setLogged }/>
            </ScrollView>
          </View>)
}
}