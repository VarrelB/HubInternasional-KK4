import React, { memo } from 'react';
import Loginbackground from '../components/Loginbackground';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import { Header, Title, Left, Right, Body, Content, Icon, Text, Card, CardItem } from 'native-base';
import { BorderlessButton } from 'react-native-gesture-handler';



const Kuis = ({ navigation }) => (
  <Loginbackground>
    <BackButton goBack={() => navigation.navigate('Dashboard')} />
    <Content padder>
              <Body style={{borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
}}>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
          

<Button
      mode="outlined"
      color= "blue">
      Pancasila
    </Button>

    <Button
      mode="outlined"
      color= "blue">
      UUD
    </Button>

    <Button
      mode="outlined"
      color= "blue">
      Perpres
    </Button>
    </Content>
  </Loginbackground>
);

export default memo(Kuis);
