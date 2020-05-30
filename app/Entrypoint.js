/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigator from './navigation';
import configureStore from './store/configureStore';
import { fontFamily, colorPalette } from './constants';
const { persistor, store } = configureStore();

const fontOptions = fontWeight => ({ fontWeight, fontFamily });
const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: colorPalette,
  fonts: {
    regular: fontOptions('400'),
    medium: fontOptions('600'),
    light: fontOptions('300'),
    thin: fontOptions('200'),
  },
};

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
