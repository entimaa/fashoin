import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#AA98A9',
    flex: 2, 
     padding:7
      },
  input: {
    paddingTop:20,
    paddingBottom:10,
    width:250,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginBottom:10,
    textAlign:'center'

    
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
  bottom:'46%',
      width: '75%',
      backgroundColor: '#584858',
      borderRadius: 10,
      marginTop: '5%',
      marginBottom: 1,
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
 imagest:{
  backgroundColor: '#74C365',
  position: 'absolute',
  left: 0,
  right: 0,
  justifyContent: 'center',
  top: '2%',
  margin:30
 },
  item: {
  flex: 1,
  margin: 4,
  
},
image: {
  width: width * 0.7,
  height: width * 0.7,
  resizeMode: 'cover',
  borderRadius: 40,
}
});

export default styles;