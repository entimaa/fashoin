import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/stySingup';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
 /*
  return (
    <View>
      <Text>SignIn Screen</Text>
      <Button
        title="Go to Other Screen"
       // onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
  */
  return (
   
    <ScrollView style={styles.container} >
      
      <View style={[styles.container, {marginTop:'60%'}]}>
        <Text >singup</Text>
        <TextInput
          style={styles.input}
          placeholder='name'
          value={email}
          onChangeText={(text) => setName(text)}
        />
         <TextInput
          style={styles.input}
          placeholder='phone'
          value={email}
          onChangeText={(text) => setName(text)}
        />
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
          <TextInput
          style={styles.input}
          placeholder='confing Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCorrect={false}
          />
      </View>

      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Siingup</Text>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
  );
};

export default SignIn;