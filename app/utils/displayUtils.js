import Toast from 'react-native-root-toast';
import { fontFamily } from '../constants';

export const showToast = ({
  message,
  duration = Toast.durations.LONG,
  position = Toast.positions.CENTER,
  delay = 0,
  onShow = () => {},
  onShown = () => {},
  onHide = () => {},
  onHidden = () => {},
}) => {
  if (message) {
    Toast.show(message, {
      containerStyle: { width: '90%' },
      textStyle: { fontFamily, fontSize: 16 },
      duration,
      position,
      delay,
      onShow: onShow,
      onShown: onShown,
      onHide: onHide,
      onHidden: onHidden,
    });
  }
};
