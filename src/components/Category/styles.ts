import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    width: '98%',
    backgroundColor: Colors.white,
    borderRadius: 5,
    ...Alignment.MBsmall,
    ...Alignment.MHxSmall,
    ...Alignment.Psmall,
  },
  categoryTitle: {
    fontSize: RFValue(12),
    marginBottom: RFValue(8),
  },
  titleField: {
    marginBottom: RFValue(2),
    fontSize: RFValue(11),
  },
  titleFieldButtonText: {
    fontSize: RFValue(11),
    color: Colors.white,
  },
  titleFieldButton: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Alignment.MVsmall,
  },
  bottomButtonsContainer: {
    ...Alignment.MTxSmall,
  },
  bottomButton: {
    backgroundColor: Colors.white,
    ...Alignment.MRxSmall,
    ...Alignment.PHsmall,
    ...Alignment.PVxSmall,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary,
  },
  addNewFieldText: {
    color: Colors.primary,
    fontSize: RFValue(11),
  },
  menuOptionsContainer: {
    marginTop: 35,
    marginLeft: -10,
    paddingVertical: 15,
    borderRadius: 6,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menuText: {
    color: Colors.black,
    fontSize: RFValue(12),
  },
});
