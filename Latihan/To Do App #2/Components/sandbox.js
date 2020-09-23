import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.boxOne}> one </Text>
      <Text style={styles.boxTwo}> two </Text>
      <Text style={styles.boxThree}> three </Text>
      <Text style={styles.boxFour}> four </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    // semuanya disesuaikan dengan jumlah text (disini ada 4 text)
    // flex: 1, // bakal ambil penuh 1 layar
    // flexDirection: 'colum', // jadi nya 4 baris 1 kolom
    flexDirection: 'row', // jadinya 1 bari 4 kolom
    // justifyContent: 'center', // ketengahkan semua
    // justifyContent: 'flex-end', // kepaling kanan
    // justifyContent: 'flex-start', // kepaling kiri
    // justifyContent: 'space-between', // 1 layar dibagi 4 jadinya kayak per 25% tanpa margin kiri kanan
    justifyContent: 'space-around', // 1 layar dibagi 4 jadinya kayak per 25% tapi ini dengan margin
    // alignItems: 'center', // itemnya bakal ditengah disesuaikan dengan marginnya
    // alignItems: 'flex-start', // itemnya bakal diatas semua apapun marginnya
    alignItems: 'flex-end', // itemnya bakal dibawah semua apapun marginnya
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    // flex bakal menyesuaikan dari total jumlah flexnya
    // misalkan flex ada 6 dan flex yang diset 1
    // artinya dia bakal ambil bagian layar nya 1/6
    // tapi kalau dia totalnya ada 6 diset 3
    // maka dia bakal ambil 3/6
    // flex: 2,
    // flex: 5,
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 3,
    backgroundColor: 'skyblue',
    padding: 40,
  },
});
