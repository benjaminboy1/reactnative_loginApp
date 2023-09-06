import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegistrerScreen';




import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();


const AuthStak = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />
        <Stack.Screen
        name="Register"
        component={RegisterScreen}
        />
    </Stack.Navigator>
  );
};

export default AuthStak;
