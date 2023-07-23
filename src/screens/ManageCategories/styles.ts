import { StyleSheet } from 'react-native';
import { Alignment } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  contentContainer: {
    ...Alignment.Pmedium,
    ...Alignment.MBlarge,
    paddingBottom: RFValue(50),
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: RFValue(10),
    left: 10,
    right: 10,
  },
});
