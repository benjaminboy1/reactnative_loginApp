import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen = ({navigation}) => {
    return (
  
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
        <View>
        <Text style={{fontSize:30, fontWeight:'bold', color:'#20315f', bottom:90}}>GAMER</Text>
        <StatusBar style="auto" />
      </View>
  
      <Image source={require('./src/assets/game.jpg')} style={{width:320, height:300, borderRadius:50, transform:[{rotate: '-15deg'}]}} />
  
      <TouchableOpacity
       onPress={()=> navigation.navigate('Home')}
       style={{backgroundColor:'#252533', padding:20, width:'90%', flexDirection:'row', borderRadius:20, top:160, justifyContent:'space-between' }}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'#fff',}}>Get started</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"/>
      </TouchableOpacity>
      </SafeAreaView>
      
  
    );
  };

export default OnboardingScreen;

const styles = StyleSheet.create({})