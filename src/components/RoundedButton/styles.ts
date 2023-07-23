import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.primary,
    ...Alignment.PVsmall,
    ...Alignment.PHmedium,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: RFValue(12),
    color: Colors.white,
  },
});
