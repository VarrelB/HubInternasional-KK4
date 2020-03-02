import React, { memo } from 'react';
import { WebView } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import BackButton from '../components/BackButton';


const Video = ({ navigation }) => (
  <Background>
    <BackButton goBack={() => navigation.navigate('Materi')} />
    <WebView
      style={{flex:1}}
      javaScriptEnabled={true}
      source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
    />
  </Background>
);

export default memo(Video);
