import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigate} from 'react-router-native';
import Input from '../../common/components/Input';
import {Button, Text} from 'react-native-paper';
//import Loader from '../../common/components/Loader';

const RegisterScreen = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.chatMeText}>chatme</Text>
        <Input
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
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
          style={styles.registerBtn}
          labelStyle={styles.registerBtnText}
          mode="contained"
          onPress={handleRegister}>
          Sign Up
        </Button>
      </View>
      <Button
        labelStyle={styles.signUpText}
        mode="contained"
        onPress={() => navigate('/login')}>
        Already a member? Sign In
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
  registerBtnContainer: {
    width: '100%',
    marginTop: 16,
  },
  registerBtn: {
    borderRadius: 0,
    height: 48,
  },
  registerBtnText: {
    paddingTop: 8,
    fontSize: 24,
  },
  signUpText: {
    fontSize: 16,
    color: '#ffff',
  },
});

export default RegisterScreen;
