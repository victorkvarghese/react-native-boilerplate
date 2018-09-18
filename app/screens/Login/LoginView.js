import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as navigationActions from 'app/actions/navigationActions';

class LoginView extends Component {
    navigate = () => {
        navigationActions.navigateToHome();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TouchableOpacity onPress={this.navigate}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginView;
