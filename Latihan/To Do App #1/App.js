import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>ToDo App</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="new todooo......."
        />
        <TouchableOpacity>
          <Text style={styles.tombol}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyBawah}>
        <View>
          <TouchableOpacity>
            <Text stlye={styles.tombolSamping}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>ToDo List</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text stlye={styles.tombolSamping}>delete</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text stlye={styles.tombolSamping}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>ToDo List</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text stlye={styles.tombolSamping}>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
    padding: 25,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    margin: 15,
    width: '75%',
    borderWidth: 1,
  },
  body: {
    flexDirection: 'row',
  },
  tombol: {
    marginTop: 15,
    borderWidth: 1,
    width: 75,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bodyBawah: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    alignItems: 'flex-start',
  },
  tombolSamping: {
    borderWidth: 1,
  },
});
