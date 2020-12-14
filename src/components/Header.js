import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {header} from './styles';

const Header = (props) => {
  return (
    <View style={header.container}>
      <View style={header.textContainer}>
        <Text style={header.text}> # {props.title}</Text>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Icon
          name="message-bulleted"
          size={34}
          color="#6ab04c"
          onPress={props.onTopicModalSelect}
          style={{
            marginRight: 18,
          }}
        />
        <Icon
          name="logout"
          size={30}
          color="#D91622"
          onPress={props.onLogOut}
          style={{marginRight: 18}}
        />
      </View>
    </View>
  );
};

export {Header};
