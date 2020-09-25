import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function Skill() {
  const [skill, setSkill] = useState([
    {
      id: 1,
      skillName: 'React Native',
      category: 'Library',
      categoryName: 'Framework / Library',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'react',
      percentageProgress: '50%',
    },
    {
      id: 2,
      skillName: 'Laravel',
      category: 'Library',
      categoryName: 'Framework / Library',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'laravel',
      percentageProgress: '100%',
    },
    {
      id: 3,
      skillName: 'JavaScript',
      category: 'Language',
      categoryName: 'Bahasa Pemrograman',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'language-javascript',
      percentageProgress: '30%',
    },
    {
      id: 4,
      skillName: 'Python',
      category: 'Language',
      categoryName: 'Bahasa Pemrograman',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'language-python',
      percentageProgress: '70%',
    },
    {
      id: 5,
      skillName: 'Git',
      category: 'Technology',
      categoryName: 'Teknologi',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'git',
      percentageProgress: '75%',
    },
    {
      id: 6,
      skillName: 'Gitlab',
      category: 'Technology',
      categoryName: 'Teknologi',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'gitlab',
      percentageProgress: '60%',
    },
  ]);

  const List = (props) => {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons name={props.icon} size={50} />
        <Text>{props.text}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={skill}
        renderItem={({item}) => (
          <List text={item.skillName} icon={item.iconName} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    borderWidth: 1,
    margin: 10,
  },
});
