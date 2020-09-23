import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <View>
      <LinearGradient
        // colors={['blue', 'red', 'pink']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#59c173', '#a17fe0', '#5d26c1']}
        style={styles.linearGradient}>
        <Text style={styles.title}>ToDo App</Text>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    padding: 100,
    // paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 80,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
