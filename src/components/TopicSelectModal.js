import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {topicModal} from './styles';

const topics = ['fullstack', 'UX', 'UI', 'mobile', 'random'];

const TopicSelectModal = (props) => {
  return (
    <Modal
      isVisible={props.visibility}
      style={topicModal.modal}
      onBackdropPress={props.onClose}>
      <View style={topicModal.container}>
        <Text style={topicModal.title}>Select a channel</Text>
        {topics.map((topic, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={topicModal.topicItemContainer}
              onPress={() => props.onTopicSelect(topic)}>
              <Text style={topicModal.topicItemText}># {topic}</Text>
            </TouchableOpacity>
          );
        })}
        <Text></Text>
      </View>
    </Modal>
  );
};

export {TopicSelectModal};
