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
import Ionicons from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();


const AuthStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}
     screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#0077b6',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
       drawerLabelStyle:{marginLeft:-25, fontSize:15}}}>
        <Drawer.Screen name="Home" component={HomeScreen}  options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Profile" component={ProfilesScreen} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
            )
          }}/>

        <Drawer.Screen name="Messages" component={MessagesScreen} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
            )
          }}/>

        <Drawer.Screen name="Settings" component={SettingsScreen} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
            )
          }}/>

        <Drawer.Screen name="Momemnts" component={MomentsScreen} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
            )
          }}/>

    </Drawer.Navigator>
  );
};

export default AuthStack;
