import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';

import {postitem} from './styles';

const PostItem = (props) => {
  return (
    <View style={postitem.container}>
      <View style={postitem.bodyContainer}>
        <Text style={postitem.postText}>{props.post.postText}</Text>
      </View>
      <View style={postitem.headerContainer}>
        <Text style={postitem.time}>
          <Text style={postitem.username}>
            {props.post.userMail.split('@')[0]} &nbsp;
          </Text>

          {moment
            .duration(
              moment(props.post.time).diff(moment(new Date()), 'seconds'),
              'seconds',
            )
            .humanize(true)}
        </Text>
      </View>
    </View>
  );
};

export {PostItem};
