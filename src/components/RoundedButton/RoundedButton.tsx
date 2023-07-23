import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

interface IRoundedButtonProps extends TouchableOpacityProps {
  label: string;
  textStyle?: StyleProp<TextStyle>;
}

const RoundedButton = (props: IRoundedButtonProps) => {
  const { label, textStyle, style, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, style && style]}
      activeOpacity={0.5}
      {...props}
      onPress={onPress}>
      <Text style={[styles.labelStyle, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(RoundedButton);
