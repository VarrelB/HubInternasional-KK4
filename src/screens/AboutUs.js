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
         
        <ScrollView>
            <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70, flexDirection: 'row'}}>
                <BackButton goBack={()=> this.props.navigation.navigate('Dashboard')}/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Text style={{ fontSize: 20,color: "#fff"}}>About Us</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/ppl.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>gawang</Text>
                    <Text>ganteng</Text>
                    <Text>bgt</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/ppl.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>gawang</Text>
                    <Text>ganteng</Text>
                    <Text>bgt</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/ppl.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>gawang</Text>
                    <Text>ganteng</Text>
                    <Text>bgt</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/ppl.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>gawang</Text>
                    <Text>ganteng</Text>
                    <Text>bgt</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/ppl.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>gawang</Text>
                    <Text>ganteng</Text>
                    <Text>bgt</Text>
                </View>
            </View>
            <View style={{ marginTop: 40,width: 323, alignSelf: 'baseline', flexDirection: 'row', marginLeft: 26, borderWidth: 1, borderColor: '#EBEBEB', elevation: 5, borderRadius: 10,padding: 20}}>
                <Image style={{ width: 100 , height: 100}} source={require('../assets/ppl.png')} />
                <View style={{ marginLeft: 12}}>
                    <Text>gawang</Text>
                    <Text>ganteng</Text>
                    <Text>bgt</Text>
                </View>
            </View>
        </ScrollView>
     </View>
    );
  }
}