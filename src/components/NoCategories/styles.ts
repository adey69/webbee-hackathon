import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alignment } from '../../theme';

export default StyleSheet.create({
  noCategoriesText: {
    fontSize: RFValue(14),
    ...Alignment.MBsmall,
  },
  labelStyle: {
    fontSize: RFValue(12),
  },
});
