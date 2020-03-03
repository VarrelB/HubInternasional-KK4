import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import BackButton from '../components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Pembahasan extends Component{
  constructor(props){
    super(props)
    this.state={
      jwb: true,
      soalke: '',
      max: 0
    }
  }
  componentDidMount(){
    this._getData()
  }
  _getData = async () => {
    const { params } = this.props.navigation.state;
    const soalke = params ? params.nomer : 0
    const Pembahasan = params ? params.Pembahasan : 0
    const jawaban = params ? params.jawaban : 0
    const myanswer = params ? params.myanswer : 0
    const max = params ? params.max : 0
    console.log(max)
    const token = await AsyncStorage.getItem('TOKEN')
    if(myanswer == jawaban){
      console.log("BENER")
      this.setState({
        soalke: soalke,
        Pembahasan: Pembahasan,
        jwb: true,
        max: max
      })
    }else{
      console.log("salah")
      this.setState({
        soalke: soalke,
        Pembahasan: Pembahasan,
        jwb: false,
        max: max

      })
    }
    console.log(token)
  }
  _next = () =>{
    console.log(this.state.max)
    console.log(this.state.soalke)

    if(this.state.max > this.state.soalke + 1){
      const nomer = this.state.soalke + 1
      this.props.navigation.replace('LatihanSoal',{ nomer })
    }else{
      this.props.navigation.navigate('DoneLatihan')

    }

  }
  render(){
    return(
     <View style={{flex:1}}>
       <ScrollView>
        {this.state.jwb ? (
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:110}}>
              <Image style={{ width: 130, height: 130}} source={require('../assets/pembahasan_benar.png')} />
              <Text style={{fontSize: 27, color: '#21BF73'}}>
              BENAR!
              </Text>
          </View>
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:110}}>
              <Image style={{ width: 130, height: 130}} source={require('../assets/pembahasan_salah.png')} />
              <Text style={{fontSize: 27, color: '#F0134D'}}>
                SALAH!
              </Text>
          </View>
        )}

        <Text style={{fontSize: 20 ,paddingLeft: 42, marginTop: 27}}>
          Pembahasan : 
        </Text>
        <View style={{
          borderRadius: 8,
          elevation: 5,
          paddingLeft: 16,
          paddingRight: 16,
          width: 288,
          marginLeft: 46,
          marginTop: 10,
          paddingTop: 25,
          paddingBottom: 25, 
          alignSelf:'baseline',
          borderColor: '#EBEBEB',
          borderWidth: 1}}>
            <Text>{this.state.Pembahasan}</Text>
        </View>
        <TouchableOpacity onPress={this._next}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 36}}>
              <Image style={{ width: 180, height: 60}} source={require('../assets/next_pembahasan.png')} />
            </View>
        </TouchableOpacity>
       </ScrollView>
       
     </View>
    );
  }
}