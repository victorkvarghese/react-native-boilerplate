import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';

export default function Login() {
  const id = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login Status : {id}</Text>
      <Button icon="camera" mode="outlined" onPress={onLogin}>
        Login
      </Button>
    </View>
  );
}
