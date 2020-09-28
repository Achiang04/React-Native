import React, {useState} from 'react';
import {View, Text, List} from 'react-native';
import Axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

export default function Datas() {
  const [email, setEmail] = useState([]);
  const [pass, setPass] = useState([]);

  const data = async () => {
    const dataEmail = await Axios(
      'https://be-kickin.herokuapp.com/api/v1/user/login',
    );
    data(dataEmail.email);
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item}) => <List item={item.email} />}
      />
    </View>
  );
}
