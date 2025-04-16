import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForJim = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'جَرَسٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Jim/%D8%AC%D9%8E%D8%B1%D9%8E%D8%B3%D9%8C(1).m4a', image: require('../../../assets/images/bell.webp') },
    { label: 'جُبْنٌ',  file:'https://f005.backblazeb2.com/file/Hurouf/Jim/%D8%AC%D9%8F%D8%A8%D9%92%D9%86%D9%8C(1).m4a', image: require('../../../assets/images/cheese.webp')},
    { label: 'جِمَالٌ',  file:'https://f005.backblazeb2.com/file/Hurouf/Jim/%D8%AC%D9%90%D9%85%D9%8E%D8%A7%D9%84%D9%8C(1).m4a',image: require('../../../assets/images/Camels.webp')  },
];
const uniqueSoundForJim = {
  label: 'ج', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Jim/%D8%AC%D9%90%D9%8A%D9%85%D9%8C(1).m4a',
};

const secondSoundFiles = [
  { label:'جَـ',  file:'https://f005.backblazeb2.com/file/Hurouf/Jim/%D8%AC%D9%8E.m4a'},
  { label: 'جُـ',  file:'https://f005.backblazeb2.com/file/Hurouf/Jim/%D9%80%D8%AC%D9%8F%D9%80.m4a'},
  { label: 'جِـ',  file:'https://f005.backblazeb2.com/file/Hurouf/Jim/%D9%80%D8%AC%D9%90%D9%80.m4a'}, 

]

const JimScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ج" soundFiles={soundFilesForJim} uniqueSound={uniqueSoundForJim} secondSoundFiles={secondSoundFiles}/>

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

export default JimScreen;
