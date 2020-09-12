import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
  },
  top: {
    alignSelf: 'stretch',
    flex: 1,
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
  },

});

const Home = () => (
  <View style={styles.root}>
    <View style={styles.bottom}>
      <Text>Home page there</Text>
    </View>
  </View>
);

export default Home;
