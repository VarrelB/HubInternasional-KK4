import React, { memo } from 'react';
import Loginbackground from '../components/Loginbackground';
import {  Text, ScrollView, View } from 'react-native';

import BackButton from '../components/BackButton';

const Asas = ({ navigation }) => (
  <Loginbackground>
      <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70}}>
        <BackButton goBack={() => navigation.navigate('Materi')} />
      </View>
      <ScrollView>
      <Text>
      {"\n"}
      {"\n"}{"\n"}{"\n"}
ASAS HUBUNGAN INTERNASIONAL{"\n"}
{"\n"}
Secara Umum{"\n"}
1. Asas Teritorial :{"\n"}
Negara melaksanakan hukum bagi semua orang dan barang yang berada di wilayahnya. Yang di luar wilayahnya ternasuk Hukum Internasional.{"\n"}
2. Asas Kebangsaan :{"\n"}
Setiap warga negara di manapun berada tetap mendapat perlakuan hukum dari negaranya. Asas ini mempunyai kekuatan eksteritorial/ekstra teriotorial{"\n"}
3. Asas Kepentingan Umum :{"\n"}
Wewenang negara untuk melindungi dan mengatur kepentingan dalam kehidupan bermasyarakat. Negara dapat beradaptasi dengan semua keadaan dan peristiwa yang bersangkutan dengan kepentingan umum.{"\n"}
{"\n"}</Text>
  </ScrollView>
  </Loginbackground>
);

export default memo(Asas);
