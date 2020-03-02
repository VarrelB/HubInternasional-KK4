import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Kuis,
  Materi,
  LatihanSoal,
  Asas,
  Manfaat,
  Organisasi,
  Pengertian,
  Pentingnya,
  Perjanjian,
  Perwakilan,
  Politik,
  Video,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    Kuis,
    Materi,
    LatihanSoal,
    Asas,
    Politik,
    Manfaat,
    Organisasi,
    Pengertian,
    Pentingnya,
    Perjanjian,
    Perwakilan,
    Video
  },
  {
    initialRouteName: 'Video',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
