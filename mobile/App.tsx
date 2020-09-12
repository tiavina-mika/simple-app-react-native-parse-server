import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';

import Home from './containers/home/Home';

type RootStackParamList = {
  Home: undefined;
};

const theme = {
  Text: {
    style: {
      fontSize: 16,
    },
  },
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
