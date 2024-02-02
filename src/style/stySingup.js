
import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: {
    
    backgroundColor:'#AA98A9',
    flex: 1, 
     padding:6
      },
  input: {
    height: 50,
    backgroundColor: '#f1f3f6',
    marginTop: '3.5%',
    
 },
 registerText: {
  bottom:'80%',
  textAlign: 'center',
      
      fontSize: 17,
      color: '#584858',
 },
 registerOptionLoginScreen:
 {
  justifyContent: 'space-evenly',
      flexDirection: 'row',
      width: '100%',
      height: '56%',
 },
 loginButton:{
  height: 35,
      width: '75%',
      backgroundColor: '#584858',
      borderRadius: 10,
      marginTop: '5%',
     
      justifyContent: 'center',
      alignSelf: 'center',
 },
 loginButtonText:
 {
  color: '#fff',
      alignSelf: 'center',
      fontSize: 18,
 },
buttonregister:{

},

});

export default styles;