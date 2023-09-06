import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'




export default function InputFields({label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, }) {
  return (
    <View style={{flexDirection:'row', borderBottomColor:'#666', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
    {icon}
    {inputType == 'password' ? (
        <TextInput
         placeholder={label}
         keyboardType={keyboardType}
         style={{paddingVertical:0, flex:1}} 
         secureTextEntry={true}/>
    ) : (
        <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={{paddingVertical:0, flex:1}} 
        />
    )}
   
    
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color:"red", fontWeight:'700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  )
}