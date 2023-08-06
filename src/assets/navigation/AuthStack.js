import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';




import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        />
    </Stack.Navigator>
  );
};

export default AuthStack;
