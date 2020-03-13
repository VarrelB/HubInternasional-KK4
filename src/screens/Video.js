import React, { memo } from 'react';
import Loginbackground from '../components/Loginbackground';
import BackButton from '../components/BackButton';
import {  Text, ScrollView, View, TouchableOpacity, Linking } from 'react-native';

const Video = ({ navigation }) => (
  <View>
    <View style={{ width :'100%', backgroundColor: '#21BF73', height: 70}}>
      <BackButton goBack={() => navigation.navigate('Materi')} />
    </View>
    <ScrollView style={{ paddingRight: 50, paddingLeft: 50}}>
      <Text>{"\n"}{"\n"}{"\n"}{"\n"}Silahkan simak video tentang Hubungan Internasional di link ini{"\n"}</Text>
      <TouchableOpacity>
        <Text  onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ZfmsnZVPLIM')}>https://www.youtube.com/watch?v=ZfmsnZVPLIM</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

export default memo(Video);