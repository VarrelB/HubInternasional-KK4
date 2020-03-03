import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import BackButton from '../components/BackButton';

export default class Pembahasan extends Component{
  _next = () =>{
    this.props.navigation.replace('Dashboard')
  }
  render(){
    return(
     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{ width: 130, height: 130}} source={require('../assets/done_latihan_soal.png')} />
        <Text style={{fontSize: 24, color: '#21BF73'}}>Latihan Soal</Text>
        <Text style={{fontSize: 24, color: '#21BF73'}}>Selesai !!</Text>
       <TouchableOpacity onPress={this._next}>
          <View>
            <Image style={{ width: 180, height: 60, marginTop: 60}} source={require('../assets/back_latihan_soal.png')} />
          </View>
       </TouchableOpacity>
     </View>
    );
  }
}