import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
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

const user = auth().currentUser ? auth().currentUser : 'Default';

const Timeline = () => {
  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const selectingTopic = (val) => {
    setSelectedTopic(val);
    setTopicModalFlag(false);

    database()
      .ref()
      .on('value', (snapshot) => {
        console.log('Data: ', snapshot.val());
      });
  };

  const sendingPost = (value) => {
    const postObject = {
      userMail: user.email,
      postText: value,
      time: moment().toISOString(),
    };

    database().ref(`${selectedTopic}/`).push(postObject);
  };

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
          <PostInput onSendPost={sendingPost} />

          <TopicSelectModal
            visibility={topicModalFlag}
            onClose={() =>
              selectedTopic !== null ? setTopicModalFlag(false) : null
            }
            onTopicSelect={selectingTopic}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Timeline};
