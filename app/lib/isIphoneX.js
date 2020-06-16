/**
 * Helper class to fixing iPhoneX UI
 */
import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
  const { height, width } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812)
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  return isIphoneX() ? iphoneXStyle : regularStyle;
}
