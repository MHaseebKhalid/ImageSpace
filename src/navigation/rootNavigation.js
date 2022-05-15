import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Local imports
import {Splash,Login,Home} from '../screens'


const StackApp = createNativeStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

export const Navigation = () => {
 
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackApp.Navigator
          detachInactiveScreens={false}
          initialRouteName="Splash"
        >
          {/* Splah */}
          <StackApp.Screen
            name="Splash"
            component={Splash}
            options={navOptionHandler}
          />
          
          {/* Login */}
          <StackApp.Screen
            name="Login"
            component={Login}
            options={navOptionHandler}
          />

          {/* Gallery */}
          <StackApp.Screen
            name="Home"
            component={Home}
            options={navOptionHandler}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </View>
  );
};