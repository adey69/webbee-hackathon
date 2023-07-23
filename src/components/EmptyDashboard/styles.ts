import { StyleSheet } from 'react-native';
import { Alignment } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  emptyText: {
    ...Alignment.MBsmall,
    fontSize: RFValue(12),
  },
});
