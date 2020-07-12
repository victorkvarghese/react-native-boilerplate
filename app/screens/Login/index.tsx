import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';

interface IState {
  loginReducer: ILoginState;
}

export default function Login() {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text accessibilityStates="" style={styles.login}>
          Login Status : {id}
        </Text>
        <Button
          accessibilityStates=""
          icon="login"
          mode="outlined"
          onPress={onLogin}>
          Login
        </Button>
      </View>
    </View>
  );
}
