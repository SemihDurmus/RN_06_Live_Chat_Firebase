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
import {Header, PostInput, PostItem, TopicSelectModal} from '../components';

const user = auth().currentUser ? auth().currentUser : 'Default';

const Timeline = () => {
  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [postList, setPostList] = useState([]);

  const selectingTopic = (value) => {
    database().ref(`/${selectedTopic}`).off('value');
    setSelectedTopic(value);
    setTopicModalFlag(false);

    database()
      .ref(`${value}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        const formattedData =
          data == null
            ? []
            : Object.keys(data).map((key) => ({
                ...data[key],
                // userMail: data[key].userMail,
                // postText: data[key].postText,
                // time: data[key].time,
              }));
        //console.log('formattedData', formattedData);

        formattedData.sort((b, a) => {
          return new Date(b.time) - new Date(a.time);
        });

        setPostList(formattedData);
      });
  };

  const sendingPost = (value) => {
    const postObject = {
      userMail: user.email,
      postText: value,
      time: moment().toISOString(),
    };

    database().ref(selectedTopic).push(postObject);
  };

  const renderPosts = ({item}) => <PostItem post={item} />;

  return (
    <SafeAreaView style={timelinePage.container}>
      <KeyboardAvoidingView
        style={timelinePage.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={timelinePage.container}>
          <Header
            onTopicModalSelect={() => setTopicModalFlag(true)}
            onLogOut={() => auth().signOut()}
            title={selectedTopic}
          />

          <FlatList
            keyExtractor={(_, i) => i.toString()}
            data={postList}
            renderItem={renderPosts}
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
