import {
   StyleSheet, 
   Text, 
   View, 
   Image, 
   TouchableOpacity,
  ScrollView, } from 'react-native'

import React, { useState } from 'react';

import Team from '../images/misc/Team.svg';
import Facebook from '../images/misc/Facebook.svg';
import Google from '../images/misc/Google.svg';
import Twitte from '../images/misc/Twitte.svg';


import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import InputFields from '../components/InputFields';
import Custombotton from '../components/Custombotton';

import DatePicker from 'react-native-date-picker'


const RegisterScreen = ({navigation}) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:15}}>
     <View style={{alignItems:'center'}}>
     <Team height={200} width={300} style={{transform: [{rotate: '5deg'}]}}/>
     </View>

      <Text style={{fontSize: 28, fontWeight:'500', marginBottom:30, color:'#333'}}>RegisterScreen</Text>

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

      <Text style={{fontSize:16, fontWeight:'500', textAlign:'center', marginBottom:30, color:'#666'}}>Or Register With Email ...</Text>


      <InputFields label={'Full Name'} icon={
      <Ionicons name="person-outline" size={20} color={'#666'} style={{marginRight:5}}/>
      }/>

      <InputFields label={'Full Name'} icon={
      <Ionicons name="person-outline" size={20} color={'#666'} style={{marginRight:5}}/>
      }/>

      <InputFields label={'Date of Birth'} icon={
      <Ionicons name="person-outline" size={20} color={'#666'} style={{marginRight:5}}/>
      }/>

      <InputFields label={'Email Adress'} icon={
      <MaterialIcons name="alternate-email" size={20} color={'#666'} style={{marginRight:5}}/>
      } keyboardType="email-adress"/>
      
      <InputFields label={'Password'} icon={
      <Ionicons name="ios-lock-closed-outline" size={20} color={'#666'} style={{marginRight:5}}
      />
      } inputType="password"/>
      
      <InputFields label={'Confirm Password'} icon={
      <Ionicons name="ios-lock-closed-outline" size={20} color={'#666'} style={{marginRight:5}}
      />
      } inputType="password"/>


      <View style={{flexDirection:"row", borderBottomColor:"#ccc", borderBottomWidth:1, paddingBottom:8, marginBottom:30}}>
      <Ionicons name="calendar-outline" size={20} color={'#666'} style={{marginRight:5}}
      />
      <TouchableOpacity onPress={()=> setOpen(true)}>
        <Text>
          Date of Birth
        </Text>
      </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

      <Custombotton label={"Register"} onPress={()=>{}}/>


      
      <Text style={{fontSize:16, fontWeight:'500', textAlign:'center', marginBottom:30, color:'#666'}}>Or Login With ...</Text>

      

      <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
      <Text style={{color:'#666', marginLeft:5, marginTop:5}}>Already registered?</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color:'#023047'}}> Login</Text>
      </TouchableOpacity>

      </View>
    


      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({})