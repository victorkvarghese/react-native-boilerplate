import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = createNavigationContainerRef();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate({ key: name, params });
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
