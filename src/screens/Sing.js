import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React,{ useState } from 'react';
// Assuming you have imported 'firebase' and 'createUserWithEmailAndPassword' from your Firebase config
import styles from '../style/stySingup';



const  SignUp = (props) => {
  const  [isLoading, setIsloadin] = useState(false);
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [name ,setName] = useState("")

const Handler =() =>{
  console.log('authHandler')
}
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 23 }}>SingUp</Text>

      <View style={{ marginTop: 40 }}>
      <TextInput
      id="name"
          style={styles.textInput}
          placeholder="name"
          autoCapitalize="none"
          onChangeText={(name) => setName(email)}
          autoCorrect={false}
        />
        <TextInput
        id="Email"
          style={styles.textInput}
          placeholder="Email"
          autoCapitalize="none"
         onChangeText={(email) => setEmail(email)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          id="Password"
          style={styles.textInput}
          placeholder="Password"
          autoCapitalize="none"
         onChangeText={(password) => setPassword(password)}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity   style={styles.button} isLoading={isLoading} onPress={Handler} >
      <Text style={{ fontSize: 22 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp ;
