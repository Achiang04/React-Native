import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function TNN2() {
  const [name, setName] = useState('ucup');
  const [person, setPerson] = useState({name: 'bambang', age: 100});

  const clickHandler = () => {
    setName('asep');
    setPerson({name: 'lala', age: 12});
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        {/* <Button>click me</Button> // caranya bukan gini */}
        <Button title="update state" onPress={clickHandler} />
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
  buttonContainer: {
    marginTop: 20,
  },
});
