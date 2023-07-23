import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alignment, Colors } from '../../theme';
import { IS_TABLET_VIEW } from '../../constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    ...Alignment.MVxSmall,
  },
  inputField: {
    flex: 1,
    fontSize: RFValue(11),
  },
  deleteIcon: {
    width: RFValue(25),
    height: RFValue(25),
  },
  fieldType: {
    ...Alignment.MHxSmall,
    ...Alignment.PxSmall,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderRadius: 5,
  },
  fieldTypeText: {
    fontSize: RFValue(IS_TABLET_VIEW ? 11 : 14),
    textTransform: 'capitalize',
  },
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOptionsContainer: {
    marginTop: 35,
    marginLeft: -10,
    paddingVertical: 15,
    borderRadius: 6,
    width: 150,
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
