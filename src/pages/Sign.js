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
  //TODO: try to minimize the nr of states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  async function signIn() {
    //TODO: a better email validation
    //alert(email + password + passwordRepeat);
    if (password == passwordRepeat) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        Alert.alert('Live Chat', '👍 Account created');
        props.navigation.goBack();
      } catch (err) {
        console.log(err);
        Alert.alert('Live Chat', '😯 A problem has occured');
      }
    } else {
      Alert.alert('Live Chat', '😯 Passwords do not match');
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
            <Text style={authStyle.logoText}>Sign up now</Text>
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Type your email address',
                placeholderTextColor: '#e57373',
                //keyboardType: 'email-address',
                // 👆 This is to avoid Strong password autofill in iOS simulator
              }}
              onType={(val) => setEmail(val)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password',
                placeholderTextColor: '#e57373',
                secureTextEntry: true,
              }}
              onType={(val) => setPassword(val)}
            />
            <Input
              inputProps={{
                placeholder: 'Confirm password',
                placeholderTextColor: '#e57373',
                secureTextEntry: true,
              }}
              onType={(val) => setPasswordRepeat(val)}
            />
            <Button title="Create account" onPress={signIn} />
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
