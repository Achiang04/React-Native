import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const image1 = {
  url:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdailyhotels.id%2F2018%2F11%2Fberkunjung-ke-bandung-jangan-lewatkan-15-tempat-wisata-hits-ini%2F&psig=AOvVaw2qxbIw9nANT55jRCY-lD9n&ust=1600879414305000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCvl9ma_esCFQAAAAAdAAAAABAY',
};

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <View>
        {/* <Image source={require('../gambar/4.jpg')} /> */}
        {/* <Text style={styles.text}>REDU</Text> */}
        <ImageBackground source={image1} style={styles.ib}>
          <Text style={styles.text1}>
            <Text style={styles.char1}>R</Text>EDU
          </Text>
          <Text style={styles.text2}>Aplikasi untuk rekreasi dan edukasi</Text>
          <Text style={styles.text3}>
            REDU App dapat menjadi sahabat terbaik kamu dalam mencari tempat
            wisata yang berfaidah dan penuh hikmah
          </Text>
        </ImageBackground>
      </View>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#77cf1e', '#5cec6a', '#33ffc7']}
          style={styles.btn1}>
          <TouchableOpacity>
            <Text>Masuk</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#77cf1e', '#5cec6a', '#33ffc7']}
          style={styles.btn2}>
          <TouchableOpacity>
            <Text>Daftar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  ib: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  text1: {
    color: '#9999ff',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 75,
  },

  char1: {
    fontSize: 65,
    color: '#9966ff',
  },

  text2: {
    color: '#3498DB',
    alignSelf: 'center',
    marginTop: 35,
    fontSize: 20,
  },

  text3: {
    color: '#3498DB',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13,
    textAlign: 'center',
  },

  btn1: {
    padding: 16,
    marginTop: 230,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 50,
    width: '75%',
    backgroundColor: 'green',
  },

  btn2: {
    padding: 16,
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 50,
    width: '75%',
    backgroundColor: 'green',
  },
});
