import React from 'react';
import {View,SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth'

import {styles} from './styles'

import {Header} from '../../components'

export const Home=(props)=>{
    let {navigation}=props

    const logout=()=>{
      auth().signOut().then(()=>{
       navigation.replace('Login')
      })
    }
    return(
        <SafeAreaView style={styles.mainContainer}>
            <Header onPress={logout}/>
        </SafeAreaView>
    )
}