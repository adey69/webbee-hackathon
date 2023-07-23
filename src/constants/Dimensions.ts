import { Dimensions } from 'react-native';

export const DIMENSIONS = {
  WINDOW_WIDTH: Dimensions.get('window').width,
  WINDOW_HEIGHT: Dimensions.get('window').height,
};
export const IS_TABLET_VIEW = Dimensions.get('window').width >= 768;
