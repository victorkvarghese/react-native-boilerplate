import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}

export default HomeView;
