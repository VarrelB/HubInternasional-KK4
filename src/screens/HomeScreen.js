import React, { memo } from 'react';
import Loginbackground from '../components/Loginbackground';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => (
  <Loginbackground>
    <Logo />
    <Header>Hubungan Internasional</Header>

    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      color= "blue"
      onPress={() => navigation.navigate('RegisterScreen')}>
      Register
    </Button>
  </Loginbackground>
);

export default memo(HomeScreen);
