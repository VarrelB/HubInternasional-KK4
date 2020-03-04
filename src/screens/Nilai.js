import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, AsyncStorage, ImageBackground, ProgressBarAndroid } from 'react-native';
import BackButton from '../components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

export default class Kuis extends Component{
  constructor(props){
    super(props)
    this.state={
      name: '',
      score: '',
      benar: '',
      salah: '',
      pbenar: 0,
      psalah: 0,
      jumlahsoal: ''
    }
  }
  componentDidMount(){
    this._getData()
  }
  _getData = async () => {
    const { params } = this.props.navigation.state;
    const token = await AsyncStorage.getItem('TOKEN')

    const myanswer = params ? params.myanswer : ''
    const allanswer = params ? params.allanswer : ''
    let benar = 0
    let salah = 0 
    for (let index = 0; index < myanswer.length; index++) {
      if(myanswer[index] === allanswer[index]){
        benar = benar + 1
      }else{
        salah = salah + 1
      }
      
    }
    let oneNumberScore = 100 / allanswer.length
    let scores = oneNumberScore * benar
    let score = Math.ceil(scores)
    let pbenar = benar / allanswer.length
    let psalah = salah / allanswer.length
    fetch('http://3.92.200.123:9000/api/users/v1', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
        }
      })
      .then(respoonse => respoonse.json())
      .then(responseJson => {
        console.log(responseJson)
        // console.log(responseJson.data)
        if(responseJson.code == 200){
          // AsyncStorage.setItem("TOKEN", responseJson.data)
          const split = responseJson.data.name.split(' ');
          const name = split[0];
          this.setState({
            name: name,
            benar: benar,
            salah: salah,
            jumlahsoal: allanswer.length,
            score: score,
            pbenar: pbenar,
            psalah: psalah

          })
        }

      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
  _next = () =>{
    this.props.navigation.replace('Dashboard')
  }
  render(){
    return(
     <View>
       <ImageBackground style={{width: "100%", height: 150}} source={require('../assets/background_image.png')}>
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#fff', }}>Result</Text>
         </View>
             
      </ImageBackground>    
      <View style={{
          marginTop: -30,
          marginLeft: 38,
          marginRight: 38,
          width: 330,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: '#FFF',
          borderWidth: 1,
          height: 321,
          borderRadius: 10,
          borderColor: '#EBEBEB',
          elevation: 5
          }}>
            <View style={{ alignItems: 'center', marginTop: 50}}>
              <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#21BF73'}}>{this.state.score}</Text>
              <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#21BF73'}}>{this.state.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 50}}>
              <Text style={{ fontSize: 18, color: '#21BF73'}}>Benar</Text>
              <ProgressBarAndroid style={{ width: 141, marginLeft: 10, marginRight : 10}} color="#24ACCA" progress={this.state.pbenar} styleAttr = "Horizontal" indeterminate = { false } />
              <Text style={{ fontSize: 18, color: '#21BF73'}}>{`${this.state.benar}/${this.state.jumlahsoal}`}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 23}}>
              <Text style={{ fontSize: 18, color: '#21BF73'}}>Salah</Text>
              <ProgressBarAndroid style={{ width: 141, marginLeft: 10, marginRight : 10}} color="#F0134D" progress={this.state.psalah} styleAttr = "Horizontal" indeterminate = { false } />
              <Text style={{ fontSize: 18, color: '#21BF73'}}>{`${this.state.salah}/${this.state.jumlahsoal}`}</Text>
            </View>
        </View>
        <TouchableOpacity  style={{ alignItems: 'center'}} onPress={this._next}>
          <View>
            <Image style={{ width: 180, height: 60, marginTop: 60}} source={require('../assets/back_latihan_soal.png')} />
          </View>
       </TouchableOpacity>           
     </View>
    );
  }
}