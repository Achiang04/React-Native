import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function FirstPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../gambar/4.jpg')} style={styles.ib}>
        <Text style={styles.text1}>
          <Text style={styles.char1}>R</Text>EDU
        </Text>
        <Text style={styles.text2}>Aplikasi untuk rekreasi dan edukasi</Text>
        <Text style={styles.text3}>
          REDU App dapat menjadi sahabat terbaik kamu dalam mencari tempat
          wisata yang berfaidah dan penuh hikmah
        </Text>
        <View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#77cf1e', '#5cec6a', '#33ffc7']}
            style={styles.btn1}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#77cf1e', '#5cec6a', '#33ffc7']}
            style={styles.btn2}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text>Register</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
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
    marginTop: 35,
  },

  char1: {
    fontSize: 65,
    color: '#ffff00',
  },

  text2: {
    color: '#ff00ff',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
  },

  text3: {
    color: '#ff00ff',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13,
    textAlign: 'center',
  },

  btn1: {
    padding: 16,
    marginTop: 300,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 50,
    width: 300,
  },

  btn2: {
    padding: 16,
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 50,
    width: 300,
  },
});
