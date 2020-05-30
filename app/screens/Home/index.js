import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as loginActions from './../../actions/loginActions';
import styles from './styles';
import {
  StandardText,
  StandardButton,
} from '../../components/commonComponents';

const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <StandardText>Home</StandardText>
      <StandardButton icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </StandardButton>
    </View>
  );
};
export default Home;
