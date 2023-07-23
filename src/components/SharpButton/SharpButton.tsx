import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import styles from './styles';

interface ISharpButtonProps extends TouchableOpacityProps {
  label: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

const SharpButton = (props: ISharpButtonProps) => {
  const { label, textStyle, buttonStyle, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(SharpButton);
