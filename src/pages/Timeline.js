import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {SafeAreaView, View, FlatList} from 'react-native';

import {timelinePage} from './styles';
//import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const Timeline = () => {
  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>TEST TIMELINE</View>
    </SafeAreaView>
  );
};

export {Timeline};
