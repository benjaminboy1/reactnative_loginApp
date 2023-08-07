import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OnboardingScreen from '../screens/OnboardingScreen';


const CustomDrawer = (props) => {
  return (
   <View style={{flex:1}}>
    <DrawerContentScrollView  {...props} contentContainerStyle={{backgroundColor:'#0077b6'}}>
        <ImageBackground source={require('../images/california.webp')} style={{padding:20}}>
            <Image source={require('../images/benja.jpeg')} style={{height:80, width:80, borderRadius:40, marginBottom:10}}/>
            <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}>Benjamin Mumbita</Text>
            
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'#fff', marginRight:5}}>300 Coins</Text>
            <FontAwesome5 name="coins" size={14} color={'#fff'}/>
            </View>
          
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'#fff', padding:10}}>
          <DrawerItemList {...props}/>
        </View>
   </DrawerContentScrollView>

   <View style={{ padding:20, borderTopColor:'#ccc', borderTopWidth:1,}}>
    <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15, }}>

    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Ionicons name="share-social-outline" size={22} />
    <Text style={{fontSize:15, marginLeft:5}}>Share Us</Text>
    </View>
    </TouchableOpacity>

    
    <TouchableOpacity onPress={() => (OnboardingScreen)} style={{paddingVertical:15, }}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Ionicons name="exit-outline" size={22} />
    <Text style={{fontSize:15, marginLeft:5}}>Sign Up</Text>
    </View>
    
    </TouchableOpacity>
  
   </View>
   </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})