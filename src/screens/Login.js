import React, { useEffect, useState,createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../style/styLogin';
import navigation from './Navigation.js';
import { Text,Alert, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image, FlatList, Dimensions, KeyboardAvoidingView } from 'react-native';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../database/Firebase-config';
//import {firebase} from 'firebase/auth'
//Auth contaxt :
export const AuthContext = createContext();

const data = [
  { id: 1, image: require('../pic/des2.png') },
  { id: 2, image: require('../pic/des3.png') },
  { id: 3, image: require('../pic/des1.png') },
  { id: 4, image: require('../pic/des4.png') },
  { id: 5, image: require('../pic/des5.png') },
  { id: 6, image: require('../pic/des6.png') },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <ImageBackground
      source={item.image}
      style={styles.image}
    />
  </View>
);

const Login = (props) => {
  console.log(props)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[user,setUser] =useState();
  const [isLoadingView,setLoadingView] = useState(false);
 
  

  
  
  const loginAction = async() => {
    if(email !== '' && password!== '' ) {
      try{
          const user = await signInWithEmailAndPassword(auth,email,password)
          .then(user => {
            console.log(user);
            // // توجيه المستخدم إلى صفحة الملف الشخصي بعد نجاح تسجيل الدخول
            props.navigation.navigate('profile');

          })
          .catch(err => {
          Alert.alert(err.message)
          })
      }
      catch(error)
      {
        Alert.alert(error.message)
      }
    }else{
      Alert.alert('Emai; and password are requered')
    }
  }
  return (

    <>
    
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 2 }}>
      <StatusBar hidden />
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          renderItem={renderItem}
        />
      </View>
      
      <View style={{ width: '100%', height: '50%' , alignItems:'center'}}>
        <Text style={{ fontSize: 24, justifyContent: 'space-between',fontWeight:'bold'}}>Login</Text>
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
      <View>
        <TouchableOpacity style={styles.loginButton} onPress={loginAction}>
          <Text style={styles.loginButtonText} >Login</Text>
        </TouchableOpacity>

        <View style={styles.registerOptionLoginScreen}>
          <TouchableOpacity  onPress={() => props.navigation.navigate("singup")} >
            <Text style={[styles.registerText, { color: '#ffff', }]}>Don't have an account? </Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.registerText}  > Forget password </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    
  </>
  );
}


export default Login;
