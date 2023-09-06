import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Team from '../images/misc/Team.svg';
import Facebook from '../images/misc/Facebook.svg';
import Google from '../images/misc/Google.svg';
import Twitte from '../images/misc/Twitte.svg';


import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';


import Custombotton from '../components/Custombotton';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputFields from '../components/InputFields';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
      <View style={{paddingHorizontal:15}}>
     <View style={{alignItems:'center'}}>
     <Team height={200} width={300} style={{transform: [{rotate: '5deg'}]}}/>
     </View>

      <Text style={{fontFamily:'Handjet-Medium', fontSize: 28, fontWeight:'500', marginBottom:30, color:'#333'}}>LoginScreen</Text>
      
      <InputFields label={'Email Adress'} icon={
      <MaterialIcons name="alternate-email" size={20} color={'#666'} style={{marginRight:5}}/>
      } keyboardType="email-adress"/>


      <InputFields label={'Password'} icon={
      <Ionicons name="ios-lock-closed-outline" size={20} color={'#666'} style={{marginRight:5}}
      />
      } 
      inputType="password"
      fieldButtonLabel={"Forgot?"}
      fieldButtonFunction={() => {}}
      />
     
      <Custombotton label={"Login"} onPress={()=>{}}/>

      
      <Text style={{fontSize:16, fontWeight:'500', textAlign:'center', marginBottom:30, color:'#666'}}>Or Login With ...</Text>

      <View style={{ flexDirection:"row", justifyContent:'space-between' , marginBottom:40}}>
 
        <TouchableOpacity onPress={() => {}} style={{ borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:30, paddingVertical:10}}>
          <Google height={24} width={24} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {}}  style={{ borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:30, paddingVertical:10}}>
       <Facebook height={24} width={24} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {}}  style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:30, paddingVertical:10}}>
       <Twitte height={24} width={24} />
       </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
      <Text>New to the app?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{color:'#023047'}}> Register</Text>
      </TouchableOpacity>


      </View>
    


      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({})