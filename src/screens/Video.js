import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

const Video = ({ navigation }) => (
  <Background>
    <BackButton goBack={() => navigation.navigate('Materi')} />
    <Logo />
    <Header>Video</Header>
  </Background>
);

export default memo(Video);
