import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        );
    }
}

export default LoginView;
