import React, { Component } from 'react';
import { View,Text, Image } from 'react-native';
import BackButton from '../components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

export default class Kuis extends Component{
  _next = () =>{
    this.props.navigation.replace('Dashboard')
  }
  render(){
    return(
     <View>
         <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70, flexDirection: 'row'}}>
                <BackButton goBack={()=> this.props.navigation.navigate('Dashboard')}/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Text style={{ fontSize: 20,color: "#fff"}}>About Us</Text>
                </View>
            </View>
        <ScrollView>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/yakob.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>Yakob Krisna Putra</Text>
                    <Text>Designer</Text>
                    <Text>yakobkrisna@gmail.com</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/sekar.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>Sekar Sari Farida</Text>
                    <Text>Front-End Developer</Text>
                    <Text>ssarie937@gmail.com</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/eventa.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>Rizky Eventa Bahtiar</Text>
                    <Text>Back-End Developer</Text>
                    <Text>rizkyventa00@gmail.com</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/varrel.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>Varrel Bramasta Nugraha</Text>
                    <Text>Back-End Developer</Text>
                    <Text>varreldanvarrel@gmail.com</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/symi.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>Symisius Lintang Ranataru</Text>
                    <Text>Content Creator</Text>
                    <Text>symisius1233@gmail.com</Text>
                </View>
            </View>
            <View style={{ marginBottom: 100, marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/zulfa.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>Zulfa Basmallah Agustyn</Text>
                    <Text>Analyst</Text>
                    <Text>zullfaba15@gmail.com</Text>
                </View>
            </View>
        </ScrollView>
     </View>
    );
  }
}