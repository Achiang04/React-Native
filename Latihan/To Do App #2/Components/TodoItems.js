import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        {/* <Icon name="fast fa-trash-alt" size={20} color="#333" /> */}
        {/* <Icon class="fas fa-trash-alt" /> */}
        {/* <Icon name="trash-alt" /> */}
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
});
