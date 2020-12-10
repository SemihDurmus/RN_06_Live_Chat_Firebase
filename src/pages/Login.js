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
// import {resolveAuthError} from '../functions';

const Login = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
              source={require('../assets/main_page_logo.png')}
              style={authStyle.logo}
            />
            <Text style={authStyle.logoText}>We're on Live Chat</Text>
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Email...',
                placeholderTextColor: '#D91622',
                keyboardType: 'email-address',
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Password...',
                placeholderTextColor: '#D91622',
                secureTextEntry: true,
              }}
            />
            <Button title="Login" />
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
