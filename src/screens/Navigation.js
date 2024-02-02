import {createNativeStackNavigator} from '@react-navigation/native-stack';
 
import Login from './Login';
import SignIn from './Sing';
 const AppStackNavigator = createNativeStackNavigator();

 export const AppStack = () => {
    return(
    <AppStackNavigator.Navigator  screenOptions={{
        // Default options for all screens in this navigator
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
        <AppStackNavigator.Screen name='singup' component={SignIn}options={{ header:() => null }}/>

        <AppStackNavigator.Screen name='Login' component={Login} options={{ header:() => null }}/>
    </AppStackNavigator.Navigator>
    )
 }