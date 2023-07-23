import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    ...Alignment.PHsmall,
    ...Alignment.PVxSmall,
    borderRadius: 5,
  },
  label: {
    color: Colors.white,
    fontSize: RFValue(12),
  },
});
