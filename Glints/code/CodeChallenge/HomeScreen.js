import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import ListItemComponent from './component/ListItemComponent';

import data from './data.json';

const DEVICE = Dimensions.get('window');

export default function HomeScreen({route}) {
  const [price, setPrice] = useState(0);
  const [products, setProduct] = useState(data.produk);
  const [filter, setFilter] = useState(data.produk);

  const currencyFormat = (num) => {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  const onBuyClick = (product) => {
    const foundProduct = products.find((p) => p.id == product.id);
    if (foundProduct.stock > 0) {
      foundProduct.stock--;
      setPrice(price + parseInt(foundProduct.harga));
    }
  };

  const onSearchQueryChange = (q) => {
    if (q == '') {
      setFilter(products);
    } else {
      const filtered = products.filter((p) => p.nama.toLowerCase().includes(q));
      console.log(filtered);
      setFilter(filtered);
    }
  };

  const updatePrice = (price) => {};

  return (
    <View style={styles.container}>
      <View
        style={{
          minHeight: 50,
          width: DEVICE.width * 0.88 + 20,
          marginVertical: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>
            Hai,{route.params}
            <Text style={styles.headerText}></Text>
          </Text>
          <Text style={{textAlign: 'right'}}>
            Total Harga{'\n'}
            <Text style={styles.headerText}>{currencyFormat(price)}</Text>
          </Text>
        </View>
        <TextInput
          style={{backgroundColor: 'white', marginTop: 8}}
          placeholder="Cari barang.."
          onChangeText={onSearchQueryChange}
        />
      </View>
      <FlatList
        numColumns="2"
        keyExtractor={(item) => item.id}
        data={filter}
        renderItem={({item}) => (
          <ListItemComponent product={item} productBuy={onBuyClick} />
        )}
      />
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
