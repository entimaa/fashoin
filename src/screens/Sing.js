import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native';
import React,{useState,useEffect} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth ,firebase,getAuth,createUserWithEmailAndPassword} from '../database/Firebase-config';
import { collection } from 'firebase/firestore';
import styles from '../style/stySingup';




const Singup=() => {
  const [email,setEmail]=useState('')
  const[password,setPassword] = useState('')
  const[firstName, setFirstName] = useState('')
  const [Address ,setAddress] = useState('')
  


  redisterUser= async (email,password,firstName,Address) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://ashoin-e3c26.appspot.com',
        })
        .then(() => {
          alert('Verifaction email send')

        }).catch((error)=> {
          alert(error.message)
        })
        .then(()=>{
          firebase.firebase().collection('usersFashionDesigner')
          .doc(firebase.auth().currentUser.uid)
          .set({
            firstName,
            Address,
            email,
          })
        }) .catch((error)=> {
          alert(error.message);
        })
      })
    .catch((error => {
      alert(error.message)
    }))

  }
return(
  <View style={styles.container}>
    <Text style={{fontWeight:'bold','fontSize':23}}>SingUp</Text>

      <View style={{marginTop:40}}>
        <TextInput
        style={styles.textInput}
          placeholder="First Name"
        onChangeText={(firstName) => setFirstName(firstName)}

          autoCorrect={false}>
        </TextInput>

        <TextInput 
        style={styles.textInput}
        placeholder="Address"
        autoCapitalize="none"
        onChangeText={(Address) => setAddress(Address)}
        autoCorrect={false}

        >

        </TextInput>
        <TextInput 
        style={styles.textInput}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(email) => setEmail(email)}
        autoCorrect={false}
        keyboardType="email-address"
        >
        </TextInput>
        <TextInput 
        style={styles.textInput}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={(password) => setPassword(password)}
        autoCorrect={false}
        secureTextEntry={true}
        >
        </TextInput>
      </View>

      <TouchableOpacity  onAccessibiltyAction={() => Singup(email,password,firstName,Address)}
      style={styles.button}>
       
          <Text style={{  fontSize:22}}> registe</Text>
      </TouchableOpacity>
  </View>
  
)

}

export default Singup