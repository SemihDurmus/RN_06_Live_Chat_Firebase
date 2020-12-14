import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import {authStyle} from './styles';
import {Input, Button} from '../components';
import {resolveAuthError} from '../functions';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function login() {
  //     auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then(() => {
  //         alert('Confirmed');
  //       })
  //       .catch((err) => {
  //         Alert.alert('Live Chat', resolveAuthError(err.code));
  //       });
  //  }
  async function login() {
    try {
      if (email === '' || password === '') {
        Alert.alert('Live Chat', resolveAuthError('auth/null-value'));
      } else {
        await auth().signInWithEmailAndPassword(email, password);
        props.navigation.navigate('Timeline');
      }
    } catch (err) {
      Alert.alert('Live Chat', resolveAuthError(err.code));
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#cfd8dc'}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
              source={require('../assets/main_page_logo.png')}
              style={authStyle.logo}
            />
            <Text style={authStyle.logoText}>Welcome to Live Chat</Text>
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Email...',
                placeholderTextColor: '#e57373',
                keyboardType: 'email-address',
              }}
              onType={(value) => setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Password...',
                placeholderTextColor: '#e57373',
                secureTextEntry: true,
              }}
              onType={(value) => setPassword(value)}
            />
            <Button title="Login" onPress={login} />
            <Button
              title="Sign Up"
              noBorder
              onPress={() => props.navigation.navigate('Sign')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
