import React, { memo } from 'react';
import Loginbackground from '../components/Loginbackground';
import ButtonMateri from '../components/ButtonMateri';
import ButtonKuis from '../components/ButtonKuis';
import ButtonLatSoal from '../components/ButtonLatSoal';

const Materi = ({ navigation }) => (
  <Loginbackground>

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
