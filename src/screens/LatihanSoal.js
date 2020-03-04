import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import BackButton from '../components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class LatihanSoal extends Component{
  constructor(props){
    super(props)
    this.state={
      title:'',
      a:'',
      b:'',
      c:'',
      d:'',
      e:'',
      jawaban:'',
      myanswer:'',
      soalke: '',
      max: '',
      Pembahasan: ''
    }
  }
  componentDidMount(){
    this._getData()
  }
  _getData = async () => {
    const { params } = this.props.navigation.state;
    const soalke = params ? params.nomer : 0
    const token = await AsyncStorage.getItem('TOKEN')
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
            e: responseJson.data[soalke].pilihan[4],
            jawaban: responseJson.data[soalke].jawaban,
            soalke: soalke,
            max: responseJson.data.length,
            Pembahasan: responseJson.data[soalke].pembahasan
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
  _pembahasan = () =>{
    // if(this.state.max > this.state.soalke + 1){
      const nomer = this.state.soalke
      const myanswer = this.state.myanswer
      const jawaban = this.state.jawaban
      const Pembahasan = this.state.Pembahasan
      const max = this.state.max
      this.props.navigation.navigate('Pembahasan',{ nomer , myanswer, jawaban ,Pembahasan, max})
  }
  render(){
    return(
     <View style={{flex:1}}>
       <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70}}>
        <BackButton goBack={()=> this.props.navigation.navigate('Dashboard')}/>
       </View>
        <Text style={{ marginTop: 100, paddingLeft: 50, borderBottomColor: '#283293', borderBottomWidth: 1}}>{`Latihan ${this.state.soalke +1}/${this.state.max}`}</Text>
        <ScrollView>
          <View style={{ paddingLeft: 33, paddingRight: 33, marginTop:30}}>
            <Text>{this.state.title}</Text>
          </View>
          <View style={{ paddingLeft: 48, paddingRight: 48, marginTop: 50}}>
            <TouchableOpacity onPress={()=>this._choice(0)}>
              <View style={{ 
                  width: 280,
                  borderRadius: 10, borderWidth: 2,
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 8,
                  paddingBottom: 8,
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
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 8,
                  paddingBottom: 8,
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
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 8,
                  paddingBottom: 8,
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
                  paddingLeft: 40,
                  paddingRight: 40,
                  borderRadius: 10,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderWidth: 2,
                  alignItems: 'center',
                  borderColor: '#25D16A',
                  alignSelf:'baseline',
                  justifyContent: 'center'}}>
                <Text style={{
                  color: this.state.myanswer === 3 ? '#FFF' : '#25D16A',
                  fontSize: 18}}>{this.state.d}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this._choice(4)}>
              <View style={{ 
                  width: 280,
                  marginTop: 30,
                  backgroundColor: this.state.myanswer === 4 ? '#25D16A' : '#FFf', 
                  paddingLeft: 40,
                  paddingRight: 40,
                  borderRadius: 10,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderWidth: 2,
                  alignItems: 'center',
                  borderColor: '#25D16A',
                  alignSelf:'baseline',
                  justifyContent: 'center'}}>
                <Text style={{
                  color: this.state.myanswer === 4 ? '#FFF' : '#25D16A',
                  fontSize: 18}}>{this.state.e}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'flex-end' , marginTop: 100, marginRight: 40}}>
            <TouchableOpacity onPress={this._pembahasan}>
              <Image style={{ width: 50, height: 50}} source={require('../assets/next_quiz.png')} />
            </TouchableOpacity>
          </View>
        </ScrollView>  
     </View>
    );
  }
}