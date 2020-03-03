import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import BackButton from '../components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

export default class Kuis extends Component{
  constructor(props){
    super(props)
    this.state={
      data: [],
      jawaban: [],
      myanswer:'',
      soalke: 0,
      max: '',
      loading: true,
      allanswer: []
    }
  }
  componentDidMount(){
    this._getData()
  }
  _getData = async () => {
    const token = await AsyncStorage.getItem('TOKEN')
    console.log(token)
    let response = await fetch('http://3.92.200.123:9000/api/varrel/soal/v1?type=quiz', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
        }
      })
    let responseJson = await response.json()
    if(responseJson.code ==200){
      let jawaban = []
      for (let index = 0; index < responseJson.data.length; index++) {
        jawaban.push(responseJson.data[index].jawaban);
        
      }
      this.setState({
        data: responseJson.data,
        jawaban: jawaban,
        loading:false
      })
    }
  }
  _choice = (myanswer) =>{
    this.setState({
      myanswer: myanswer
    })
  }
  _next = () =>{
    if(this.state.allanswer.length ===0){
      this.setState({
        soalke: this.state.soalke + 1,
        allanswer: [...this.state.allanswer, this.state.myanswer],
        myanswer: '',
  
      })
    }else{
      this.state.allanswer[this.state.soalke] = this.state.myanswer
      this.setState({
        soalke: this.state.soalke + 1,
        myanswer: this.state.allanswer.length-1 - this.state.soalke ===0 ? '' : this.state.allanswer[this.state.soalke +1]
  
      })
    }
    
  }
  _prev = async () =>{
    if(this.state.soalke === 0){
      return;
    }else{
      this.state.allanswer[this.state.soalke] = await this.state.myanswer
      this.setState({
        soalke: this.state.soalke -1,
        myanswer: this.state.allanswer[this.state.soalke -1],
  
      })
    }
  
  }
  render(){
    if(this.state.loading){
      return <ActivityIndicator/>
    }
    return(
     <View style={{flex:1}}>
        <BackButton goBack={()=> this.props.navigation.navigate('')}/>
        <Text style={{ marginTop: 100, paddingLeft: 50, borderBottomColor: '#283293', borderBottomWidth: 1}}>{`Latihan ${this.state.soalke +1}/${this.state.data.length}`}</Text>
        <ScrollView>
          <View style={{ paddingLeft: 33, paddingRight: 33, marginTop:30}}>
            <Text>{this.state.data[this.state.soalke].title}</Text>
          </View>
          <View style={{ paddingLeft: 48, paddingRight: 48, marginTop: 50}}>
            <TouchableOpacity onPress={()=>this._choice(0)}>
              <View style={{ 
                  width: 280,
                  borderRadius: 10, borderWidth: 2,
                  alignItems: 'center',
                  paddingLeft: 40,
                  paddingRight: 40,
                  borderColor: '#25D16A',
                  backgroundColor: this.state.myanswer === 0 ? '#25D16A' : '#FFf', 
                  alignSelf:'baseline',
                  justifyContent: 'center'}}>
                <Text style={{
                  color: this.state.myanswer === 0 ? '#FFF' : '#25D16A',
                  fontSize: 18
                  }}>{this.state.data[this.state.soalke].pililhan[0]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this._choice(1)}>
              <View style={{ 
                  width: 280,
                  marginTop: 30,
                  backgroundColor: this.state.myanswer === 1 ? '#25D16A' : '#FFf', 
                  borderRadius: 10, borderWidth: 2,
                  paddingLeft: 40,
                  paddingRight: 40,
                  alignItems: 'center',
                  borderColor: '#25D16A',
                  alignSelf:'baseline',
                  justifyContent: 'center'}}>
                <Text style={{
                  color: this.state.myanswer === 1 ? '#FFF' : '#25D16A',
                  fontSize: 18}}>{this.state.data[this.state.soalke].pililhan[1]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this._choice(2)}>
              <View style={{ 
                  width: 280,
                  marginTop: 30,
                  backgroundColor: this.state.myanswer === 2 ? '#25D16A' : '#FFf', 
                  paddingLeft: 40,
                  paddingRight: 40,
                  borderRadius: 10, borderWidth: 2,
                  alignItems: 'center',
                  borderColor: '#25D16A',
                  alignSelf:'baseline',
                  justifyContent: 'center'}}>
                <Text style={{
                  color: this.state.myanswer === 2 ? '#FFF' : '#25D16A',
                fontSize: 18}}>{this.state.data[this.state.soalke].pililhan[2]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this._choice(3)}>
              <View style={{ 
                  width: 280,
                  marginTop: 30,
                  backgroundColor: this.state.myanswer === 3 ? '#25D16A' : '#FFf', 
                  paddingLeft: 40,
                  paddingRight: 40,
                  borderRadius: 10, borderWidth: 2,
                  alignItems: 'center',
                  borderColor: '#25D16A',
                  alignSelf:'baseline',
                  justifyContent: 'center'}}>
                <Text style={{
                  color: this.state.myanswer === 3 ? '#FFF' : '#25D16A',
                fontSize: 18}}>{this.state.data[this.state.soalke].pililhan[3]}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection:'row', marginTop: 100,  paddingLeft: 40, paddingRight: 40}}>
            <View style={{  flex:1, alignItems: 'flex-start'}}>
              <TouchableOpacity onPress={this._prev}>
                <Image style={{ width: 50, height: 50}} source={require('../assets/back_quiz.png')} />
              </TouchableOpacity>
            </View>
            <View style={{  flex:1, alignItems: 'flex-end'}}>
              <TouchableOpacity  onPress={this._next}>
                <Image style={{ width: 50, height: 50}} source={require('../assets/next_quiz.png')} />
              </TouchableOpacity>
            </View>
          </View>
         
        </ScrollView>
        
     </View>
    );
  }
}