import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

import Button from '../../components/Button';

const useStyles = () => StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  inputItem: {
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 20,
  },
});

const Login = () => {
  const styles = useStyles();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (value: any) => setEmail(value);
  const handlePasswordChange = (value: any) => setPassword(value);
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={styles.inputItem}>
          <Input
            value={email}
            placeholder="Entrez votre email"
            onChangeText={handleEmailChange}
          />
        </View>
        <View style={styles.inputItem}>
          <Input
            value={password}
            placeholder="Entrez votre mot de passe"
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
        </View>
        <View style={styles.inputItem}>
          <Button
            title="Login"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
