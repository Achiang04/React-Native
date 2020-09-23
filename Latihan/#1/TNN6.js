import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default function TNN4() {
  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'peach', id: '5'},
    {name: 'toad', id: '6'},
    {name: 'bowser', id: '7'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      // console.log(prevPeople.filter((person) => person.id == id));
      console.log(prevPeople.filter((person) => person.id != id));
      // return prevPeople.filter((person) => person.id == id);
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});