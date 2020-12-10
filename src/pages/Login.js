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
// import {Input, Button} from '../components';
// import {resolveAuthError} from '../functions';

const Login = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <Text style={authStyle.logoText}>ClarusChat</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
