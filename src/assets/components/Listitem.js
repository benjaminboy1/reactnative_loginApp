import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { windowWidth } from '../utils/Dimensions';

const Listitem = ({Poster, photo, id, subtitle, isFree, title, price}) => {


  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
     <View style={{flexDirection: 'row', alignItems:'center', flex:1}}>
        <Image source={photo} style={{width:55, height:55, borderRadius:10, marginRight:8}} />
        
       <View style={{width:windowWidth -230}}>
       <Text numberOfLines={1} style={{fontSize:14, color:'#333', textTransform:'uppercase', fontWeight:'bold'}}>{title}</Text>
       <Text style={{fontSize:14, color:'#333'}}>{subtitle}</Text>
      
       </View>
    </View>
    <TouchableOpacity style={{backgroundColor:'#158', padding:10, borderRadius:10, width:100}}>
        <Text style={{textAlign:'center', color:'#fff', fontSize:14}}>
       {isFree == 'Yes' && 'play'}
       {isFree ==  'No' && price}
         </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Listitem;

const styles = StyleSheet.create({})