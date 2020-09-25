import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Beranda() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To The Jungle</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 30,
    alignSelf: 'center',
  },
});
