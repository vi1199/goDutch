import React from 'react';
import {TextInput} from 'react-native';
import inputStyles from './inputStyles';

export default BaseInput = (props) => {
  return (
    <TextInput
      {...props}
      style={inputStyles.container}
      maxLength={props.length}
      keyboardType={props.keyboardType}
      onSelectionChange={props.onSelectionChange}
      onChangeText= {props.onChangeText}
    />
  );
};
