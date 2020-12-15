import * as React from 'react';
import {Text} from 'react-native';
import textStyles from './textStyles';

export default BaseText = (props) => {
  return (
    <Text
      style={[
        textStyles.container,
        {
          fontSize: props.size,
          color: props.color,
          fontWeight: props.bold,
          marginHorizontal: props.marginHorizontal,
          marginVertical: props.marginVertical
        },
      ]}>
      {props.children}
    </Text>
  );
};
