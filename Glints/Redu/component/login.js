import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Beranda from './beranda';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log('dismissed keyboard');
        }}>
        <ImageBackground source={require('../gambar/4.jpg')} style={styles.ib}>
          <Text style={styles.text1}>
            <Text style={styles.char1}>R</Text>EDU
          </Text>
          <Text style={styles.text2}>Aplikasi untuk rekreasi dan edukasi</Text>
          <View>
            <TextInput
              type={'email'}
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'red'}
            />
          </View>
          <View>
            <TextInput
              type={'password'}
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'red'}
            />
          </View>
          <View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#77cf1e', '#5cec6a', '#33ffc7']}
              style={styles.btn1}>
              <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
                <Text>Masuk</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.bpa}>
            <Text style={styles.bpaText}>Belum Punya Akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.bpaText}>Daftar di sini</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ib: {
    height: '100%',
    resizeMode: 'cover',
  },

  text1: {
    color: '#ffff99',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },

  char1: {
    fontSize: 65,
    color: '#ffff00',
  },

  text2: {
    color: '#ff00ff',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
  },

  input: {
    width: 350,
    marginTop: 13,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: 'red',
    color: 'white',
  },

  btn1: {
    padding: 16,
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 50,
    width: 300,
  },
  bpa: {
    alignSelf: 'center',
    marginTop: 20,
  },

  bpaText: {
    color: 'red',
    alignSelf: 'center',
  },
});
