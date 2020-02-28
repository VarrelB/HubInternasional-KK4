import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

const LatihanSoal = ({ navigation }) => (
  <Background>
    <BackButton goBack={() => navigation.navigate('Dashboard')} />
    <Logo />
    <Header>Latihan Soal</Header>
  </Background>
);

export default memo(LatihanSoal);
