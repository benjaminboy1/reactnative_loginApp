import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';

import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';

import CustomSwitch from '../components/CustomSwitch';
import Listitem from '../components/Listitem';
import { freeGames, paidGames } from '../model/data';




const HomeScreen = ({navigation}) => {
    const [gamesTab, setGamesTab] = useState(1);
    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item}/>
    };
    
    const onSelectSwitch = (value) => {
        setGamesTab(value);
    }

    return (
       <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
        <ScrollView style={{padding:20}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom:20}}>
            <Text style={{fontSize:18}}>Hello Benjmain mumbita</Text>
            
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ImageBackground 
            source={require('../images/benja.jpeg')}
            style={{height:40, width:40, }}
            imageStyle={{borderRadius:50}} 
            /> 
            </TouchableOpacity>
          
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

            <View style={{
                marginVertical:20,
            }}>
                <CustomSwitch 
                selectionMode={1}
                option1="free to play"
                option2="paid games"
                onSelectSwitch={onSelectSwitch}
                />
            </View>

            {gamesTab == 1 && freeGames.map(item => (
                 < Listitem 
                 key={item.id} 
                 photo={item.Poster} 
                 title={item.title} 
                 subtitle={item.subtitle} 
                 isFree={item.isFree} 
                 id={item.id}/> 
            ))}
            {gamesTab == 2 && paidGames.map(item => (
                 <Listitem 
                  
                  photo={item.Poster}
                  title={item.title}
                  subtitle={item.subtitle} 
                  isFree={item.isFree} 
                  price={item.price}/>
            ))}
        </ScrollView>
       </SafeAreaView>
      );

}

export default HomeScreen;


const styles = StyleSheet.create({})