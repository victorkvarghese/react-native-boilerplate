import PropTypes from 'prop-types';
import { Text, Button } from 'react-native-paper';
import React from 'react';
import { withTheme } from 'react-native-paper';
import commonStyle from './commonStyles';
const standardText = props => {
  const {
    children,
    sm,
    md,
    lg,
    xl,
    regular,
    medium,
    light,
    thin,
    styles = {},
  } = props;
  const { fonts } = props.theme;
  let fontSize = null,
    fontOpts = {};
  switch (true) {
    case sm:
      fontSize = 16;
      break;
    case md:
      fontSize = 18;
      break;
    case lg:
      fontSize = 20;
      break;
    case xl:
      fontSize = 24;
      break;
    default:
      fontSize = 18;
      break;
  }
  switch (true) {
    case regular:
      fontOpts = fonts.regular;
      break;
    case medium:
      fontOpts = fonts.medium;
      break;
    case light:
      fontOpts = fonts.light;
      break;
    case thin:
      fontOpts = fonts.thin;
      break;
    default:
      fontOpts = fonts.regular;
      break;
  }
  return (
    <Text
      style={{ ...fontOpts, fontSize, ...styles, ...commonStyle.defaultText }}>
      {children}
    </Text>
  );
};
const StandardText = withTheme(standardText);
StandardText.propTypes = {
  children: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  light: PropTypes.bool,
  thin: PropTypes.bool,
  styles: PropTypes.object,
};
StandardText.defaultProps = {
  children: '',
  styles: {},
};
const standardBut = props => {
  const {
    children,
    sm,
    md,
    lg,
    xl,
    regular,
    medium,
    light,
    thin,
    styles = {},
  } = props;
  const { fonts } = props.theme;
  let fontSize = null,
    fontOpts = {};
  switch (true) {
    case sm:
      fontSize = 16;
      break;
    case md:
      fontSize = 18;
      break;
    case lg:
      fontSize = 20;
      break;
    case xl:
      fontSize = 24;
      break;
    default:
      fontSize = 18;
      break;
  }
  switch (true) {
    case regular:
      fontOpts = fonts.regular;
      break;
    case medium:
      fontOpts = fonts.medium;
      break;
    case light:
      fontOpts = fonts.light;
      break;
    case thin:
      fontOpts = fonts.thin;
      break;
    default:
      fontOpts = fonts.regular;
      break;
  }
  return (
    <Button
      {...props}
      labelStyle={{
        ...fontOpts,
        fontSize,
        ...styles,
        ...commonStyle.defaultText,
      }}>
      {children}
    </Button>
  );
};
const StandardButton = withTheme(standardBut);
StandardButton.propTypes = {
  children: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  light: PropTypes.bool,
  thin: PropTypes.bool,
  styles: PropTypes.object,
};
StandardButton.defaultProps = {
  children: '',
  styles: {},
};
export { StandardText, StandardButton };
