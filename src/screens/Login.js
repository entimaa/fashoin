import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../style/styLogin';

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
    <ImageBackground source={item.image} style={styles.image} />
  </View>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 2 }}>
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          renderItem={renderItem}
        />
      </View>

      <View style={{ width: '100%', height: '50%' }}>
        <Text style={{ fontSize: 24, justifyContent: 'space-between', left: '40%' }}>Login</Text>
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
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerOptionLoginScreen}>
          <TouchableOpacity>
            <Text style={[styles.registerText, { color: '#ffff' }]}>Don't have an account? </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.registerText}>  Forget password </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
