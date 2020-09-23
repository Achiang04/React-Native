import React from 'react';
import {StyleSheet, Text, View, PickerIOSComponent} from 'react-native';

export default function TNN1() {
  return (
    <View style={styles.container}>
      {/* <Text> Bambang </Text> */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello Bambang</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>
          Bambang adalah anak <Text> haram </Text>dari si ucup
        </Text>
        <Text style={styles.boldText}>
          Bambang adalah anak haram dari si ucup
        </Text>
        <Text>Bambang adalah anak haram dari si ucup</Text>
        <Text>Bambang adalah anak haram dari si ucup</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    // fontWeight: 'bold',
  },
});
