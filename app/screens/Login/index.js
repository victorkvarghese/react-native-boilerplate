import React from 'react';
import { View } from 'react-native';
import {
  StandardText,
  StandardButton,
} from './../../components/commonComponents';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from './../../actions/loginActions';
import styles from './styles';

const Login = () => {
  const data = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <StandardText>{JSON.stringify(data)}</StandardText>
      <StandardButton icon="login" mode="outlined" onPress={onLogin}>
        Login
      </StandardButton>
    </View>
  );
};

export default Login;
