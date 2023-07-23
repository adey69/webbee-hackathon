import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alignment } from '../theme';

export default StyleSheet.create({
  headerTitle: {
    fontSize: RFValue(14),
  },
  drawerLabel: {
    fontSize: RFValue(12),
  },
  menuButton: {
    ...Alignment.MLsmall,
  },
  menuIcon: {
    width: RFValue(16),
    height: RFValue(16),
  },
  drawerContainer: {
    ...Alignment.PTmedium,
  },
});
