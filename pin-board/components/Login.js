import { Text, View, TextInput, TouchableOpacity} from 'react-native'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from '../firebase/Config'
import { useState } from 'react'
import styles from '../Styles'

export default function Login({setLogged, setDisplayName, setUid, setEmail , setScreen}) {

    const [registerPage, setRegisterPage ] = useState(false)
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    const login = async() => {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth,userName,password)
        .then(() => {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setDisplayName(user.displayName)
                    setUid(user.uid)
                    setEmail(user.email)
                    setLogged(true)
                    setScreen(1)
                } 
            })    
        }).catch((error) => {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') { 
                alert('Invalide credentials!')
            } else if (error.code === 'auth/too-many-requests'){
                alert('Too many attempts, your account will be locked temporarily') 
            } else {
                console.log(error.code)
                console.log(error.message)
            }
        })
    }

    const register = async() => {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, userName, password)
        .then(() => {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setUid(user.uid)
                    setEmail(user.email)
                    setLogged(true)
                    setScreen(3)
                }
            })
        }).catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })

    }

  return ( 
    <View>
        <View style = { styles.loginSubContainer }>
            { registerPage ? (
                <View>
                <Text style = {  { fontWeight: 'bold', fontSize: 30, padding: 10} }>Register </Text>
                
                <Text style = { styles.loginItems }>email  </Text>
                    <TextInput style = { styles.loginItems } placeholder='Type email' value = {userName} onChangeText = { setUserName }/>
                <Text style = { styles.loginItems }>Password  </Text>
                    <TextInput style = { styles.loginItems } secureTextEntry={true} placeholder='Type password' value = { password } onChangeText = { setPassword }/>
                <TouchableOpacity style = { styles.btnLogin } onPress = { () => register() }>
                    <Text>SIGN IN</Text>
                </TouchableOpacity>

                <TouchableOpacity style = { [styles.btnLogin, {backgroundColor : 'orange' , marginTop : 15} ]} onPress = { () => setRegisterPage(!registerPage) }>
                    <Text>Already had a user?</Text>
                </TouchableOpacity>
                    </View>
            ) : (
                <View>
            <Text style = {  { fontWeight: 'bold', fontSize: 30, padding: 10} }>Login </Text>
                
            <Text style = { styles.loginItems }>email  </Text>
                <TextInput style = { styles.loginItems } placeholder='Type email' value = {userName} onChangeText = { setUserName }/>
            <Text style = { styles.loginItems }>Password  </Text>
                <TextInput style = { styles.loginItems } secureTextEntry={true} placeholder='Type password' value = { password } onChangeText = { setPassword }/>

                <TouchableOpacity style = { styles.btnLogin } onPress = { () => login() }>
                    <Text>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style = { [styles.btnLogin, {backgroundColor : 'orange' , marginTop : 15} ]} onPress = { () => setRegisterPage(!registerPage) }>
                    <Text>Register?</Text>
                </TouchableOpacity>
            </View>    
            ) }
        </View>
    </View>
  )
}
