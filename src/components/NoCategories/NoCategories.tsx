import React from 'react';
import { View, Text } from 'react-native';
import { CommonStyles } from '../../theme';
import styles from './styles';
import { APP_TEXT } from '../../strings';

const NoCategories = () => {
  return (
    <View style={[CommonStyles.flexCentered]}>
      <Text style={styles.noCategoriesText}>{APP_TEXT.noCategoriesFound}</Text>
    </View>
  );
};

export default React.memo(NoCategories);
