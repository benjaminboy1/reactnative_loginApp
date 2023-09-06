import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Custombotton({label, onPress}) {
  return (
    <TouchableOpacity
     onPress={onPress} 
     style={{
         backgroundColor:"#158",
         padding:20,
         borderRadius:10, 
         marginBottom:30
         }}>

        <Text
         style={{
            fontSize:17, 
            fontWeight:"500", 
            color:"#fff", 
            textAlign:'center'
            }}>
            {label}
            </Text>
      </TouchableOpacity>
  )
}