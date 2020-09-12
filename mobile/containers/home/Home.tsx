import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    alignSelf: 'stretch',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontWeight: 'bold',
  },
});

const Home = () => (
  <View style={styles.root}>
    <View style={styles.main}>
      <View style={styles.content}>
        <Text style={styles.label}>Bienvenu: </Text>
        <Text style={[styles.label, styles.value]}>Bienvenu </Text>
      </View>
      <View style={styles.content}>
        <Button title="Se déconnecter" />
      </View>
    </View>
  </View>
);

export default Home;
