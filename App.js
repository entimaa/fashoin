import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { AppStack } from './src/screens/Navigation';
import {firebase } from './src/database/Firebase-config';
import{onAuthStateChanged} from 'firebase/auth';
import {AuthContext} from './src/screens/AuthProvider';
import auth from './src/database/Firebase-config'



const App = () =>{

  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default App;