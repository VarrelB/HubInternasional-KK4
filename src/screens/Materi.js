import React, { memo } from 'react';
import {  Text, ScrollView, View } from 'react-native';

import Loginbackground from '../components/Loginbackground';
import ButtonMateri from '../components/ButtonMateri';
import ButtonKuis from '../components/ButtonKuis';
import ButtonLatSoal from '../components/ButtonLatSoal';
import BackButton from '../components/BackButton';

const Materi = ({ navigation }) => (
  <Loginbackground>
        <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70}}>
          <BackButton goBack={()=> navigation.navigate('Dashboard')}/>
       </View>
    <ButtonMateri mode="contained" onPress={() => navigation.navigate('Pengertian')}>
      Pengertian
    </ButtonMateri>
    <ButtonLatSoal mode="contained" onPress={() => navigation.navigate('Asas')}>
      Asas
    </ButtonLatSoal>
    <ButtonKuis mode="contained" onPress={() => navigation.navigate('Pentingnya')}>
      Pentingnya HI
    </ButtonKuis>
    <ButtonMateri mode="contained" onPress={() => navigation.navigate('Perjanjian')}>
      Perjanjian Internasional
    </ButtonMateri>
    <ButtonLatSoal mode="contained" onPress={() => navigation.navigate('Politik')}>
      Politik Luar Negeri RI
    </ButtonLatSoal>
    <ButtonKuis mode="contained" onPress={() => navigation.navigate('Perwakilan')}>
      Perwakilan RI di Luar Negeri
    </ButtonKuis>
    <ButtonMateri mode="contained" onPress={() => navigation.navigate('Organisasi')}>
      Organisasi Internasional
    </ButtonMateri>
    <ButtonLatSoal mode="contained" onPress={() => navigation.navigate('Manfaat')}>
     Manfaat 
    </ButtonLatSoal>
    <ButtonKuis mode="contained" onPress={() => navigation.navigate('Video')}>
      Video
    </ButtonKuis>
</Loginbackground>
);


export default memo(Materi);
