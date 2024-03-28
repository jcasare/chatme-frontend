import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useNavigate} from 'react-router-native';
import Input from '../../common/components/Input';

const LoginScreen = () => {
  const {isLogginIn, onLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formReset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.chatMeText}>chatme</Text>

        <Input
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <Button
          style={styles.loginBtn}
          labelStyle={styles.loginBtnText}
          mode="contained"
          onPress={() => {
            onLogin({email, password});
            formReset();
          }}>
          Sign In
        </Button>
      </View>
      <Button
        labelStyle={styles.signUpText}
        mode="contained"
        onPress={() => navigate('/register')}>
        Sign Up
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 24,
  },
  formContainer: {
    alignItems: 'center',
    width: '100%',
  },
  chatMeText: {
    fontWeight: '700',
    color: '#ffff',
    marginBottom: 32,
    fontSize: 56,
  },
  signUpText: {
    fontSize: 16,
    color: '#ffff',
  },
});
export default LoginScreen;
