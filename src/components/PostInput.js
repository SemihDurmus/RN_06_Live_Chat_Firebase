import React, {useRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {post_input} from './styles';

const PostInput = (props) => {
  const [postText, setPostText] = React.useState('');
  const inputRef = useRef();

  return (
    <View style={post_input.container}>
      <View style={post_input.inputContainer}>
        <TextInput
          ref={inputRef}
          multiline
          placeholder="Type a message"
          placeholderTextColor="#3c6382"
          onChangeText={(value) => setPostText(value)}
        />
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => {
          props.onSendPost(postText);
          inputRef.current.clear();
        }}>
        <Icon name="send" size={30} color="#6ab04c" />
      </TouchableOpacity>
    </View>
  );
};

export {PostInput};
