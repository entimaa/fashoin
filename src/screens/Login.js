import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Login = () => {
  const [loginView, setLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Text style={{ fontSize: 24 }}>Login</Text>
        <TextInput
       style={styles.input}
       placeholder='Email'
       keyboardType='email-address'
       textContentType='emailAddress'
       value={email}
       onChangeText={(text) => setEmail(text)}
        />
        <TextInput
         style={styles.input}
         placeholder='Password'
         secureTextEntry={true}
         value={password}
         onChangeText={(text) => setPassword(text)}
         autoCorrect={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    height: 50,
    backgroundColor: '#f1f3f6',
    marginTop: '3.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
 },
});

export default Login;
