import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './firebaseConfig';
import Login from './src/screens/Login';
export default function App() {


  return (
    <View style={styles.container}>
     <Login/>
    </View>
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
