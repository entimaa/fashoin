import React,{createContext,useState} from "react";
import { Auth } from "firebase/auth";
import Login  from "./Login";
import Sing from './Sing'
import { auth } from "../database/Firebase-config";
 export const AuthContext = createContext();

export const AuthProvider = ({person})=> {
    const [user,setUser] = useState(null)


    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                Login: Login,
                SingUp: Sing,
                Logout: async() =>
                {
                try{
                    await auth().singOut();

                }catch(e){
                    console.log(e);
                }
            },
            }} >
                 {person}
        </AuthContext.Provider>
    )
}
