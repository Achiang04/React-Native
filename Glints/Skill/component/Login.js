import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      <View style={styles.container}>
        <Text style={styles.text1}>Login</Text>
        <View>
          <Text style={styles.text2}>Username / Email</Text>
          <TextInput style={styles.input1} />
        </View>
        <View>
          <Text style={styles.text2}>Password</Text>
          <TextInput style={styles.input1} />
        </View>
        <View style={styles.btn1}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
