import {createNativeStackNavigator} from '@react-navigation/native-stack';
 
import Login from './Login';
import SignIn from './Sing';
import Profile from './ProfileScreen';
import Dashpoard from './Dashboard';
 const AppStackNavigator = createNativeStackNavigator();

 export const AppStack = () => {
    return(
    <AppStackNavigator.Navigator  screenOptions={{
        // Default options for all screens in this navigator
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
        <AppStackNavigator.Screen name='SignUp' component={SignIn} options={{ header:() => null }}/>

        <AppStackNavigator.Screen name='Login' component={Login} options={{ header:() => null }}/>

        <AppStackNavigator.Screen name='profile' component={Profile}  options={{ header:() => null }}/>

    </AppStackNavigator.Navigator>
    )
 }