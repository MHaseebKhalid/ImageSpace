import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

import {styles} from './styles'
import {images} from '../../assets/images'

export const Header=(props)=>{
    let {onPress}=props
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.headingTextStyle}>Image Space</Text>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.logOutIconStyle} source={images.logOutIcon}/>
            </TouchableOpacity>
        </View>
    )
}