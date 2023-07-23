import React from 'react';
import { View } from 'react-native';
import { CommonStyles } from '../../theme';
import { Text } from 'react-native-paper';
import styles from './styles';
import { useEmptyDashboard } from './Hooks';
import { APP_TEXT } from '../../strings';
import { RoundedButton } from '../RoundedButton';

const EmptyDashboard = () => {
  const { onButtonPressed } = useEmptyDashboard();
  return (
    <View style={[CommonStyles.flex, CommonStyles.centerContent]}>
      <Text style={styles.emptyText}>{APP_TEXT.noCategoriesFound}</Text>
      <RoundedButton label={APP_TEXT.addACategory} onPress={onButtonPressed} />
    </View>
  );
};

export default React.memo(EmptyDashboard);
