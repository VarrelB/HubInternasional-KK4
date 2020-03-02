import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import BackButton from '../components/BackButton';

export default class Pembahasan extends Component{
  constructor(props){
    super(props)
    this.state={
      title:'',
      a:'',
      b:'',
      c:'',
      d:'',
      jawaban:'',
      myanswer:'',
      soalke: '',
      max: ''
    }
  }
  componentDidMount(){
    this._getData()
  }
  _getData = async () => {
    const { params } = this.props.navigation.state;
    const soalke = params ? params.nomer : 0
    const token = await AsyncStorage.getItem('TOKEN')
    console.log(token)
    fetch('http://3.92.200.123:9000/api/varrel/soal/v1?type=latihan', {
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
          this.setState({
            title:responseJson.data[soalke].title,
            a: responseJson.data[soalke].pilihan[0],
            b: responseJson.data[soalke].pilihan[1],
            c: responseJson.data[soalke].pilihan[2],
            d:responseJson.data[soalke].pilihan[3],
            jawaban: responseJson.data[soalke].jawaban,
            soalke: soalke,
            max: responseJson.data.length
          })
        }

      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
  _choice = (myanswer) =>{
    this.setState({
      myanswer: myanswer
    })
  }
  render(){
    return(
     <View style={{flex:1}}>
        <BackButton goBack={()=> this.props.navigation.navigate('')}/>
        <Text style={{ marginTop: 100, paddingLeft: 50, borderBottomColor: '#283293', borderBottomWidth: 1}}>{`Latihan ${this.state.soalke +1}/${this.state.max}`}</Text>
        <View style={{ paddingLeft: 33, paddingRight: 33, marginTop:30}}>
          <Text>{this.state.title}</Text>
        </View>
        <View style={{ paddingLeft: 48, paddingRight: 48, marginTop: 50}}>
          <TouchableOpacity onPress={()=>this._choice(0)}>
            <View style={{ 
                width: 280,
                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                backgroundColor: this.state.myanswer === 0 ? '#25D16A' : '#FFf', 
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                 color: this.state.myanswer === 0 ? '#FFF' : '#25D16A',
                 fontSize: 18
                }}>{this.state.a}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._choice(1)}>
            <View style={{ 
                width: 280,
                marginTop: 30,
                backgroundColor: this.state.myanswer === 1 ? '#25D16A' : '#FFf', 
                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                 color: this.state.myanswer === 1 ? '#FFF' : '#25D16A',
                 fontSize: 18}}>{this.state.b}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._choice(2)}>
            <View style={{ 
                width: 280,
                marginTop: 30,
                backgroundColor: this.state.myanswer === 2 ? '#25D16A' : '#FFf', 

                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                color: this.state.myanswer === 2 ? '#FFF' : '#25D16A',
               fontSize: 18}}>{this.state.c}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this._choice(3)}>
            <View style={{ 
                width: 280,
                marginTop: 30,
                backgroundColor: this.state.myanswer === 3 ? '#25D16A' : '#FFf', 

                borderRadius: 10, borderWidth: 2,
                alignItems: 'center',
                borderColor: '#25D16A',
                alignSelf:'baseline',
                justifyContent: 'center'}}>
              <Text style={{
                color: this.state.myanswer === 3 ? '#FFF' : '#25D16A',
                fontSize: 18}}>{this.state.d}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'flex-end' , marginTop: 100, marginRight: 40}}>
          <TouchableOpacity>
            <Image style={{ width: 50, height: 50}} source={require('../assets/next_quiz.png')} />
          </TouchableOpacity>
        </View>
     </View>
    );
  }
}