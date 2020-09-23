import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function TNN3() {
  const [name, setName] = useState('bambang');
  const [age, setAge] = useState('12');

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. Bambang"
        onChangeText={(nama) => setName(nama)}
      />
      <Text>Enter age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 88"
        onChangeText={(umur) => setAge(umur)}
      />
      <Text>
        name : {name}, age : {age}
      </Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
