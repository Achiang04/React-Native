import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default function LoginScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [isError, setIsError] = useState(false);

  const loginHandler = () => {
    if (pass === '123') {
      setIsError(false);
      navigation.navigate('HomeScreen', userName);
    } else {
      setIsError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Code Challenge</Text>
        <Text style={styles.subTitleText}>Glints x Binar</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.labelText}>Username/Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan Nama User/Email"
              // Kode di sini
              onChangeText={setUserName}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan Password"
              // Kode di sini
              onChangeText={setPass}
              secureTextEntry={true}
            />
          </View>
        </View>
        <Text style={isError ? styles.errorText : styles.hiddenErrorText}>
          Password Salah
        </Text>
        {/* Kode di sini */}
        <Button title="Login" onPress={loginHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  formContainer: {
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  labelText: {
    fontWeight: 'bold',
  },
  textInput: {
    width: 300,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});
