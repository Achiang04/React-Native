import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {Error} from './Error';
import {AuthContext} from '../contexts/AuthContext';
import {Loading} from './Loading';

export default function Login({navigation}) {
  // const {login} = React.useContext(AuthContext);
  // const [email, setEmail] = React.useState('bambang12345@gmail.com');
  // const [password, setPassword] = React.useState('bambang');
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState('');

  // const handleLogin = async () => {
  //   try {
  //     console.log(user);
  //     console.log(password);
  //     const apiLogin = await axios({
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       url: 'https://be-kickin.herokuapp.com/api/v1/user/login',
  //       body: JSON.stringify({
  //         email: user,
  //         password: password,
  //       }),
  //     });
  //     console.log(apiLogin.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     console.log(user);
  //     console.log(password);
  //     const payload = {
  //       email: user,
  //       password: password,
  //     };
  //     let status_code;
  //     const response = await axios
  //       .post('https://be-kickin.herokuapp.com/api/v1/user/login', payload, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //       .then((res) => {
  //         status_code = res.status;
  //         console.log(response.data.token);
  //         return res.data;
  //       })
  //       .catch((err) => {
  //         status_code = err.response.status;
  //       });

  //     const token = response.data.token;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleLogin = (token) => {
  //   console.log(user);
  //   console.log(password);
  //   if (token == null) return null;
  //   return fetch('https://be-kickin.herokuapp.com/api/v1/user/login', {
  //     method: 'post',
  //     headers: {Authorization: 'Bearer ' + token},
  //   })
  //     .then((response) => {
  //       console.log(response.json());
  //       return response.json();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleLogin = async () => {
  //   console.log(user);
  //   console.log(password);
  //   const resp = await fetch(
  //     'https://be-kickin.herokuapp.com/api/v1/user/login',
  //     {post
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: user,
  //         password: password,
  //       }),
  //     },
  //   )
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));

  //   console.log(resp.data.data);
  //   if (resp.results) {
  //     window.location.href = '/';
  //   } else {
  //     console.log('Failed when create');
  //   }
  // };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      {/* <Error error={error} /> */}
      <View style={styles.container}>
        <Text style={styles.text1}>Login</Text>
        <View>
          <Text style={styles.text2}>Username / Email</Text>
          <TextInput
            style={styles.input1}
            // placeholder={'email'}
            // keyboardType={'email-address'}
            // value={email}
            // onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.text2}>Password</Text>
          <TextInput
            style={styles.input1}
            // placeholder={'Password'}
            // secureTextEntry
            // value={password}
            // onChangeText={setPassword}
          />
        </View>
        <View style={styles.btn1}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            {/* <TouchableOpacity onPress={() => handleLogin()}> */}
            {/* <TouchableOpacity> */}
            <Text style={styles.text4}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text3}>atau</Text>
        <View style={styles.btn2}>
          <TouchableOpacity onPress={() => navigation.navigate('Daftar')}>
            <Text style={styles.text4}>Daftar?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 130,
    color: '#009999',
  },

  text2: {
    marginLeft: 30,
    marginTop: 30,
    color: '#009999',
  },

  input1: {
    borderWidth: 1,
    width: 350,
    alignSelf: 'center',
    height: 40,
    borderColor: '#009999',
  },

  btn1: {
    padding: 10,
    marginTop: 50,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 50,
    width: 150,
    backgroundColor: '#0099ff',
    borderColor: '#0099ff',
  },

  text4: {
    color: 'white',
    fontWeight: 'bold',
  },

  text3: {
    alignSelf: 'center',
    marginTop: 15,
    color: '#0099cc',
  },

  btn2: {
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 50,
    width: 150,
    backgroundColor: '#0033cc',
    borderColor: '#0033cc',
  },

  text5: {
    color: 'white',
    fontWeight: 'bold',
  },
});
