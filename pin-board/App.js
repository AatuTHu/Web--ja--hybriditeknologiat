import { StatusBar } from 'expo-status-bar';
import { View, ScrollView,Text } from 'react-native';
import styles from './Styles';
import Header from './components/Header';
import DisplayNotes from './components/DisplayNotes';
import AddNotes from './components/AddNotes';
import Login from './components/Login';
import BottomNav from './components/BottomNav';
import Profile from './components/Profile';
import { useState } from 'react';
import { signOut, getAuth } from './firebase/Config'
import UpdateProfile from './components/UpdateProfile';


export default function App() {
  
  let Title;
  const [ loggedIn, setLogged ] = useState(false)
  const [ displayName, setDisplayName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ uId, setUid ] = useState('')
  const [ screen, setScreen ] = useState(1)

  const screenNavigation = () => {
    if( screen === 1) {
      Title = "Aatus board"
       return (
        <ScrollView>
          <Header Title = {Title}/>
            <AddNotes displayName = { displayName } uId = { uId } />
          <DisplayNotes screen = { screen } uId = { uId } />       
        </ScrollView>
        );
    } else if ( screen === 2 ) {
        Title = 'Profile'
        return (
          <ScrollView>
            <Header Title = { Title } />
              <Profile displayName = { displayName } uId = { uId } email = { email } setScreen = { setScreen }/>
            <DisplayNotes screen = { screen } uId = { uId } />
          </ScrollView>
          );
    } else if ( screen === 3) {
        Title = 'Edit Profile';
      return (
      <ScrollView>
          <Header Title = { Title } />
        <UpdateProfile displayName = { displayName } email = { email } setDisplayName = { setDisplayName } setEmail = { setEmail } setScreen = {setScreen}/>
      </ScrollView>
      )
    }
   }

   const SignOut = () => { 
      const auth = getAuth()
        signOut(auth).then(() => { 
          setDisplayName('')
          setUid('')
          setEmail('')
          setLogged(!loggedIn)
          setScreen(1) 
        }).catch((error) => {
          console.log(error.message)
        })
    }
  

  if ( loggedIn ) {
  return (
  <View style = {styles.container}> 
    {screenNavigation()}   
      <BottomNav setScreen = { setScreen } SignOut = { SignOut } />
    <StatusBar
        style= 'auto'
        backgroundColor='#ffff'/>
    </View>
  );
} else {
  return  (<View style = { styles.container }>       
            <Login setLogged = { setLogged } setDisplayName = { setDisplayName } setUid = { setUid } setEmail = { setEmail } setScreen = { setScreen } />       
          </View>
    );
}}