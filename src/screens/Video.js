import React, { memo } from 'react';
import { WebView, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import BackButton from '../components/BackButton';


const Video = ({ navigation }) => (
  <Background>
   <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70}}>
            <BackButton goBack={() => navigation.navigate('Materi')} />
       </View>
    <WebView
      style={{flex:1}}
      javaScriptEnabled={true}
      source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
    />
  </Background>
);

export default memo(Video);
