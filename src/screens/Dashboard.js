import {text,StyleSheet,SafeAreaView,TouchableOpacity,Text} from 'react-native';
import React,{ useState,useEffect} from 'react';
import styles from '../style/styDashboard';
import {firebase,firestore,auth} from'../database/Firebase-config';


const Dashpoard =() => {
    const [name,setName]= useState('');

    useEffect(() => {
        firebase.firestore().collection('usersFashionDesigner')
        .doc(auth.currentUser.uid).get()
        .then((snapshot)=> {
            if(snapshot.exists){
                setName(snapshot.data())
            }
            else{
                console.log('User does not exist');
            }
        });
    
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize:20,fontWeight:'bold'}}>
                hELOO ,{name.Aderss}
            </Text>
            <TouchableOpacity onPress={()=> firebase.auth().singOut()}>
                <Text style={{ fontSize:22,fontWeight:'bold'}}> sing Out</Text>
               
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Dashpoard;