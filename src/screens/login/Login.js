import React,{useState} from 'react';
import {View,Text,ActivityIndicator} from 'react-native';

import {images} from '../../assets/images'
import {CustomButton} from '../../components'
import {styles} from './styles'
import Firebase from '../../services/firebse/Firebase'

export const Login=({navigation})=>{

    const [loading,setLoading]=useState(false)
   
    const facebookLogin=()=>{
        Firebase.loginWithFacebook(async (user) => {
            console.log('USER',user)

            if (user?.isSuccess) {
                setLoading(true);
              console.log('USER',user)
              navigation.replace('Home')
            }
          });
    }

    return(
        <View style={styles.mainContainer}>
        {
        loading?
           <ActivityIndicator size="large" color="#34aeff" />
            :
           <View style={{alignItems:'center'}}>
            <CustomButton onPress={facebookLogin} imgUri={images.facebookIcon}/>
            <Text>Login with Facebook</Text>
           </View>
        }
        </View>
    )
}