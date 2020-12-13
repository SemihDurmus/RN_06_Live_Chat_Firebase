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
import {Header, PostInput, TopicSelectModal} from '../components';

const Timeline = () => {
  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);
  return (
    <SafeAreaView style={timelinePage.container}>
      <KeyboardAvoidingView
        style={timelinePage.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={timelinePage.container}>
          <Header
            onTopicModalSelect={() => setTopicModalFlag(true)}
            title={selectedTopic}
          />
          <FlatList
            data={[]}
            renderItem={() => {
              null;
            }}
          />
          <PostInput onSendPost={(val) => console.log(val)} />

          <TopicSelectModal
            visibility={topicModalFlag}
            onClose={() =>
              selectedTopic !== null ? setTopicModalFlag(false) : null
            }
            onTopicSelect={(val) => {
              setSelectedTopic(val);
              setTopicModalFlag(false);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Timeline};
