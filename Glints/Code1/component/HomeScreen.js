import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import json from './data.json';

const DEVICE = Dimensions.get('window');

export default function HomeScreen({route, navigation}) {
  const {user} = route.params;

  const data = json.produk;

  const [harga, setHarga] = React.useState(0);
  const handleHarga = (val) => {
    console.log(val);
    val = parseInt(val);
    let prevharga = harga;
    prevharga = prevharga + val;
    setHarga(prevharga);
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>
            Hai,{'\n'}
            <Text style={styles.headerText}>{user}</Text>
          </Text>

          <Text style={{textAlign: 'right'}}>
            Total Harga{'\n'}
            <Text style={styles.headerText}>Rp {harga}</Text>
          </Text>
        </View>

        <TextInput
          style={{backgroundColor: 'white', marginTop: 8}}
          placeholder="Cari barang.."
        />
        <FlatList
          horizontal={false}
          numColumns={2}
          keyExtractor={(data) => data.id}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <Image
                  style={styles.itemImage}
                  source={{uri: item.gambaruri}}
                />

                <Text style={styles.itemName}>{item.nama}</Text>
                <Text style={styles.itemPrice} ref="harga">
                  {item.harga}
                </Text>
                <Text style={styles.itemStock}> {item.stock}</Text>
                <TouchableOpacity
                  style={styles.itemButton}
                  onPress={() => handleHarga(item.harga)}>
                  <Text style={styles.buttonText}>BELI</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  //? Styling di sini
  itemContainer: {
    width: DEVICE.width * 0.44,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: 'black',
    borderWidth: 3,
  },
  itemImage: {
    height: 80,
    width: 160,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  itemPrice: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
  },
  itemStock: {
    textAlign: 'center',
  },
  itemButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
  },
});
