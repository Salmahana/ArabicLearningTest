import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForHa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'حَلْوَى', file:'https://f005.backblazeb2.com/file/Hurouf/Ha/%D8%AD%D9%8E%D9%84%D9%92%D9%88%D9%8E%D9%89(1).m4a', image: require('../../../assets/images/candy.webp') },
    { label: 'حُوتٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ha/%D8%AD%D9%8F%D9%88%D8%AA%D9%8C(2).m4a', image: require('../../../assets/images/whale.jpg')},
    { label: 'حِذَاءٌ', file:' https://f005.backblazeb2.com/file/Hurouf/Ha/%D8%AD%D9%90%D8%B0%D9%8E%D8%A7%D8%A1%D9%8C(1).m4a',image: require('../../../assets/images/shoes.jpg')  },
];
const uniqueSoundForHa = {
  label: 'ح', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Ha/%D8%AD%D9%8E%D8%A7%D8%A1%D9%8C(1).m4a',
};

const secondSoundFiles = [
  { label:'حَـ', file:'https://f005.backblazeb2.com/file/Hurouf/Ha/%D9%80%D8%AD%D9%8E%D9%80.m4a'},
  { label: 'حُـ', file:'https://f005.backblazeb2.com/file/Hurouf/Ha/%D9%80%D8%AD%D9%8F%D9%80.m4a'},
  { label: 'حِـ', file:'https://f005.backblazeb2.com/file/Hurouf/Ha/%D9%80%D8%AD%D9%90%D9%80.m4a'}, 

]

const HaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ح" soundFiles={soundFilesForHa} uniqueSound={uniqueSoundForHa} secondSoundFiles={secondSoundFiles}/>

  {/* {soundFilesForAlif.map((sound, index) => (
        <SoundButton key={index} label={sound.label} soundFile={sound.file} /> */}
      {/* ))} */}
  </View>
)}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default HaScreen;
