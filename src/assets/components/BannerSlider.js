 import { Text, View, Image} from 'react-native'
 import React from 'react'

 
 export default function BannerSlider ({data}) {

    return (
        <View>
          <Image source={data.image} style={{height:150, width:290, borderRadius:10}}/>
        </View>
      );

 }
    