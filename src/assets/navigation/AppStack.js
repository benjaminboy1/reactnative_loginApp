import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'

import CustomDrawer from '../components/CustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfilesScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';


import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const AuthStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfilesScreen}/>
        <Drawer.Screen name="Messages" component={MessagesScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="Momemnts" component={MomentsScreen}/>
    </Drawer.Navigator>
  );
};

export default AuthStack;
