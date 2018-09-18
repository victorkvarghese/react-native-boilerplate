import { createStackNavigator } from 'react-navigation';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';

const RNApp = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    Home: {
        screen: Home,
        navigationOptions: { header: null, gesturesEnabled: false }
    }
});

export default RNApp;
