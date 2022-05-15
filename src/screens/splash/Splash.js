import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
import auth from '@react-native-firebase/auth'


export const Splash=({navigation})=>{
    useEffect(()=>{
        let userId= auth()?.currentUser?.uid;
        setTimeout(() => {
            if(userId){
                navigation.replace('Home')
            }else{
                navigation.replace('Login')
            }
        }, 1000);
    },[])
    return(
       null
    )
}