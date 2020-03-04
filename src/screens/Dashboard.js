import React, { memo } from 'react';
import Loginbackground from '../components/Loginbackground';
import Logo from '../components/Logo';
import Header from '../components/Header';
import ButtonMateri from '../components/ButtonMateri';
import ButtonKuis from '../components/ButtonKuis';
import ButtonLatSoal from '../components/ButtonLatSoal';


const Dashboard = ({ navigation }) => (
  <Loginbackground>
    <Logo />
    <Header>Hubungan Internasional</Header>
    <ButtonMateri mode="contained" onPress={() => navigation.navigate('Materi')}>
      Materi
    </ButtonMateri>
    <ButtonLatSoal mode="contained" onPress={() => navigation.navigate('LatihanSoal',{nomer: 0})}>
      Latihan Soal
    </ButtonLatSoal>
    <ButtonKuis mode="contained" onPress={() => navigation.navigate('Kuis')}>
      Quis
    </ButtonKuis>
    <ButtonMateri mode="contained" onPress={() => navigation.navigate('AboutUs')}>
      Tentang Kami
    </ButtonMateri>
  </Loginbackground>
);



export default memo(Dashboard);
