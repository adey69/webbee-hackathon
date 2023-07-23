import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alignment } from '../../theme';

export default StyleSheet.create({
  container: {
    ...Alignment.Psmall,
  },
  rowContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: RFValue(14),
  },
  buttonText: {
    fontSize: RFValue(12),
  },
  buttonStyle: {
    ...Alignment.PHxSmall,
    ...Alignment.PVxSmall,
  },
  contentContainer: {
    ...Alignment.Pmedium,
    ...Alignment.MBlarge,
    paddingBottom: RFValue(50),
  },
});
