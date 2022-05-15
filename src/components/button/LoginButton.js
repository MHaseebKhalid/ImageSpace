import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {styles} from './styles'

export const LoginButton=(props)=>{
    let {onPress,imgUri}=props
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Image source={imgUri} style={styles.iconStyle}/>
        </TouchableOpacity>
    )
}