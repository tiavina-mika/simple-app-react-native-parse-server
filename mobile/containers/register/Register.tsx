import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Parse from 'parse/react-native';

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
  buttonStyle: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0.5,
    paddingVertical: 20,
  },
  titleStyle: {
    color: '#000',
  },
  divError: {
    textAlign: 'center',
    color: '#721c24',
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
  },
});

const Login = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string >('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (value: any) => setEmail(value);
  const handlePasswordChange = (value: any) => setPassword(value);
  const handleUsernameChange = (value: any) => setUsername(value);
  const submitAndClear = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  };
  const navigate = () => navigation.navigate('Login');

  const onSignUp = async () => {
    if (username.trim() === '' || username === undefined || email.trim() === '' || email === undefined || password.trim() === '' || password === undefined) {
      setError('Rempli correctement les champs.');
    } else {
      try {
        // await Parse.User.logOut();
        const user = new Parse.User();
        user.set('username', username);
        user.set('email', email);
        user.set('password', password);
        const result = await user.signUp();

        await AsyncStorage.setItem('sessionToken', result.getSessionToken());
        await AsyncStorage.setItem('username', (result as any).getUsername());

        submitAndClear();

        navigation.navigate('Home');
      } catch (err) {
        setError(err.message);
      }
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.main}>

        {!!error && (
          <View style={styles.inputItem}>
            <Text style={styles.divError}>{error}</Text>
          </View>
        )}
        <View style={styles.inputItem}>
          <Input
            value={email}
            placeholder="Entrez votre email"
            onChangeText={handleEmailChange}
            keyboardType="email-address"
          />
          <Input
            value={username}
            placeholder="Entrez votre nom"
            onChangeText={handleUsernameChange}
          />
        </View>
        <View style={styles.inputItem}>
          <Input
            value={password}
            placeholder="Entrez votre mot de passe"
            onChangeText={handlePasswordChange}
            secureTextEntry
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputItem}>
          <Button
            title="S'enregistrer"
            onPress={onSignUp}
          />
        </View>
        <View style={styles.inputItem}>
          <Button
            title="Login"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            onPress={navigate}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
