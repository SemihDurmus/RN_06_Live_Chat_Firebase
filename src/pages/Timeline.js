import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  FlatList,
  Platform,
} from 'react-native';

import {timelinePage} from './styles';
//import {PostItem, PostInput, Header, TopicSelectModal} from '../components';
import {Header, PostInput} from '../components';

const Timeline = () => {
  const user = auth().currentUser;
  console.log(user);
  return (
    <SafeAreaView style={timelinePage.container}>
      <KeyboardAvoidingView
        style={timelinePage.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={timelinePage.container}>
          <Header />
          <FlatList
            data={[]}
            renderItem={() => {
              null;
            }}
          />
          <PostInput onSendPost={(val) => console.log(val)} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Timeline};
