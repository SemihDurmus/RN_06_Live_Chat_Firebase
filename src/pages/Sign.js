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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({
    password_first: '',
    password_second: '',
  });

  const handleChange1 = (e) => {
    setPassword((prevState) => ({
      ...prevState,
      password_first: e,
    }));
  };
  const handleChange2 = (e) => {
    setPassword((prevState) => ({
      ...prevState,
      password_second: e,
    }));
  };

  function passwordMatch(txt) {
    if (password.password_first.indexOf(txt) === txt.indexOf(txt)) {
      return true;
    } else {
      // Alert.alert('ClarusChat', 'Passwords do not match');
      return false;
    }
  }

  async function signIn() {
    if (password.password_first === password.password_second) {
      try {
        await auth().createUserWithEmailAndPassword(
          email,
          password.password_first,
        );
        Alert.alert('Live Chat', '👍 Account created');
        props.navigation.navigate('Login');
      } catch (err) {
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
                keyboardType: 'email-address',
              }}
              onType={(val) => setEmail(val)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password',
                placeholderTextColor: '#e57373',
                //secureTextEntry: true,
              }}
              onType={(val) => handleChange1(val)}
            />
            {passwordMatch(password.password_second) ? (
              <Input
                inputProps={{
                  placeholder: 'Type your password again..',
                  secureTextEntry: true,
                }}
                onType={(value) => {
                  handleChange2(value);
                  passwordMatch(value);
                }}
                newBorder={{borderWidth: 2, borderColor: 'green'}}
              />
            ) : (
              <Input
                inputProps={{
                  placeholder: 'Type your password again..',
                  secureTextEntry: true,
                }}
                onType={(value) => {
                  handleChange2(value);
                  passwordMatch(value);
                }}
                newBorder={{borderWidth: 2, borderColor: 'red'}}
              />
            )}
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
