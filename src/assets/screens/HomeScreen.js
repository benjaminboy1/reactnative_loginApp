import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';


import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';

import sliderData from '../model/data';


const HomeScreen = () => {
    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item}/>
    }

    return (
       <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
        <ScrollView style={{padding:20}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:20}}>
            <Text style={{fontSize:18}}>Hello Benjmain mumbita</Text>
            <ImageBackground 
            source={require('../images/benja.jpeg')}
            style={{height:40, width:40, }}
            imageStyle={{borderRadius:50}} 
            />
            </View>
            <View 
            style={{flexDirection: 'row', 
            borderColor:'#C6C6C6', 
            borderWidth:1, 
            borderRadius:8,
            paddingHorizontal:10,
            paddingVertical:8}}>
                <Feather name="search" size={20} color="#C6C6C6" style={{marginRight:5}} />
                <TextInput placeholder='Search' style={{}}/>
            </View>

            <View 
            style={{marginVertical: 15,
            flexDirection:'row',
            justifyContent:'space-between'
            }}>
                <Text style={{fontSize:16}}>Upcomming </Text>
                <TouchableOpacity> 
                    <Text style={{color:'#0aada8' }}>See all</Text>
                </TouchableOpacity>
            </View>

            <Carousel 
            
            ref={(c) => { this._carousel = c; }}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 35}
              itemWidth={300}
              loop={true}

            />
        </ScrollView>
       </SafeAreaView>
      );

}

export default HomeScreen;

const styles = StyleSheet.create({})