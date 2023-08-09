import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GameDetailsScreen from '../screens/GameDetailsScreen';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{headerShown: false}}
    />
    <Stack.Screen
    name="GameDetails"
    component={GameDetailsScreen}
    options={({route}) => ({title: route.params?.title,})}
    />
</Stack.Navigator>
  )
}

const Tabnavigation = () => {
    return (
      <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel:false, 
        headerShown:false, 
        tabBarActiveTintColor:'#ffb3c6', 
        tabBarInactiveTintColor: '#fff',
        tabBarStyle:{backgroundColor:'#158'}}}>

        <Tab.Screen name="Home" component={HomeStack} options={({route}) => ({
          tabBarStyle: {display: getTabBarVisibility(route),
          backgroundColor:'#158',
        },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )
        })}/>
        <Tab.Screen name="Card" component={CardScreen}  options={{
          tabBarBadge:3,
          tabBarBadgeStyle:{backgroundColor:'#ffb3c6'},
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={size} />
          )}}/>

        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          )}} />
      </Tab.Navigator>
    );
  }

  const getTabBarVisibility = (route) => {
    //console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    //console.log(routeName);

    if( routeName == 'GameDetails') {
      return 'none';
    }
    return 'flex';
    

  }
  export default Tabnavigation;