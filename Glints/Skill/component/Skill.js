import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

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

  const Skill = ({item}) => <Text>{item.skillName}</Text>;
  const catNam = ({item}) => <Text>{item.categoryName}</Text>;

  return (
    <View>
      <FlatList data={skill} renderItem={(Skill, catNam)} />
    </View>
  );
}
