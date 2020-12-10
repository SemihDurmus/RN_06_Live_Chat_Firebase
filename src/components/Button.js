import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {regular_button, outlined_button} from './styles';

const Button = (props) => {
  const selectedStyle = props.noBorder ? outlined_button : regular_button;
  return (
    <TouchableOpacity style={selectedStyle.container} onPress={props.onPress}>
      <Text style={selectedStyle.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export {Button};
