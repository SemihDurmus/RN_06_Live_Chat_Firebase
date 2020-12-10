import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {authStyle} from './styles';
import {Input, Button} from '../components';

const Sign = (props) => {
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
            <Text style={authStyle.logoText}>Sign up now</Text>
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Type your email address',
                keyboardType: 'email-address',
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password',
                secureTextEntry: true,
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Confirm password',
                secureTextEntry: true,
              }}
            />
            <Button title="Create account" />
            <Button
              title="Cancel"
              noBorder
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};
