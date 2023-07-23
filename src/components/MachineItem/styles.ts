import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    ...Alignment.Psmall,
    width: '98%',
  },
  header: {
    fontSize: RFValue(12),
    marginBottom: RFValue(5),
  },
  bottomButton: {
    backgroundColor: Colors.white,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary,
    ...Alignment.MTsmall,
    paddingVertical: RFValue(3),
    alignItems: 'center',
  },
  addNewFieldText: {
    color: Colors.primary,
    fontSize: RFValue(11),
  },
  titleField: {
    marginBottom: RFValue(2),
    fontSize: RFValue(11),
  },
  switchLabel: {
    fontSize: RFValue(11),
    marginLeft: RFValue(2),
  },
});
