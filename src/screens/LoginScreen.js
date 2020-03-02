import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ToastAndroid, AsyncStorage } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Loginbackground from '../components/Loginbackground';
import Header from '../components/Header';
import Button from '../components/Button';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }else{
      fetch('http://3.92.200.123:9000/api/users/v1', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ='
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        })
      })
      .then(respoonse => respoonse.json())
      .then(responseJson => {
        // console.log(responseJson)
        // console.log(responseJson.data)
        if(responseJson.data.length > 0){
          AsyncStorage.setItem("TOKEN", responseJson.data)
          navigation.navigate('Dashboard');
        }

      })
      .catch(error => {
        console.error(error);
        throw error;
      });
    }

  };

  return (
    <Loginbackground>
      
      <Logo />
      <Header>E-book PPKN</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button style={styles.text} mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Belum punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </Loginbackground>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  text: {
    color: theme.colors.white,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
