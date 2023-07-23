import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    ...Alignment.PHmedium,
    backgroundColor: Colors.white,
    ...Alignment.PBlarge,
  },
  header: {
    fontSize: RFValue(20),
    backgroundColor: Colors.white,
    ...Alignment.MVsmall,
    fontWeight: '700',
  },
  separator: { height: 10 },
  sectionFooter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: RFValue(12),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
