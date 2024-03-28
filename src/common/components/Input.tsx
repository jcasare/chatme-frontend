import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {COLOUR_WHITE} from '../constants/colours';
type InputProps = {
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: Dispatch<SetStateAction<string>>;
};
const Input = ({
  placeholder = '',
  value,
  secureTextEntry = false,
  onChangeText,
}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      accessibilityLabelledBy={undefined}
      accessibilityLanguage="en-US"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: COLOUR_WHITE,
  },
});
export default Input;
