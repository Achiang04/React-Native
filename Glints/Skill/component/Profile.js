import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Saya</Text>
      <Image source={require('../Gambar/2.jpg')} style={styles.gambar}></Image>
      <Text style={styles.name}>Ucup</Text>
      <Text style={styles.work}>React-Native Batch#7</Text>
      <View style={styles.box}>
        <Text style={styles.portfoliotext}>Portfolio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gambar: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginTop: 15,
  },
  work: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EC6FF',
    textAlign: 'center',
    marginBottom: 7,
  },
  box: {
    borderRadius: 10,
    borderColor: 'blue',
    borderBottomColor: '#000',
    backgroundColor: '#EFEFEF',
    marginTop: 20,
    padding: 20,
    alignContent: 'center',
    borderWidth: 1,
    width: 350,
  },
  portfoliotext: {
    fontSize: 18,
    color: '#003366',
  },
  boxinner: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textinner: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  boxinnered: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boxinnering: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
  },
});
