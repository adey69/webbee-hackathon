import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hitSlop: {
    top: 5,
    bottom: 5,
    left: 10,
    right: 10,
  },
  absoluteCentered: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
