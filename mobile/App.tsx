import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Parse from 'parse/react-native';

import Home from './containers/home/Home';
import Login from './containers/login/Login';
import Register from './containers/register/Register';

import PrimaryNovaBoldFont from './assets/fonts/Proxima-Nova-Bold.otf';
import PrimaryNovaSemiBoldFont from './assets/fonts/Proxima-Nova-Semibold.otf';
import PrimaryNovaRegularFont from './assets/fonts/Proxima-Nova-Regular.otf';
import PrimaryNovaMediumFont from './assets/fonts/Proxima-Nova-Medium.otf';

Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('mobileapp-2020-09');
Parse.serverURL = 'http://localhost:8080/parse';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

export type ThemeI = {
  colors: any;
  Text?: any;
};
const theme: ThemeI = {
  colors: {
    primary: '#99CA3D',
  },
  Text: {
    style: {
      fontSize: 16,
    },
  },
};

const fetchFonts = () => Font.loadAsync({
  'proxima-nova-bold': PrimaryNovaBoldFont,
  'proxima-nova-semibold': PrimaryNovaSemiBoldFont,
  'proxima-nova-regular': PrimaryNovaRegularFont,
  'proxima-nova-medium': PrimaryNovaMediumFont,
});

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
