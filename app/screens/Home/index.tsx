import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Button
        icon="logout"
        mode="outlined"
        onPress={onLogout}
        accessibilityStates="">
        Logout
      </Button>
    </View>
  );
}
