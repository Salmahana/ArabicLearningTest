import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForTa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'تَاجٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ta/%D8%AA%D9%8E%D8%A7%D8%AC%D9%8C(1).m4a', image: require('../../../assets/images/crown.jpg') },
    { label: 'تُفَّاحَةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ta/%D8%AA%D9%8F%D9%81%D9%91%D9%8E%D8%A7%D8%AD%D9%8E%D8%A9%D9%8C.m4a', image: require('../../../assets/images/apple.webp')},
    { label: 'تِلْمِيذٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ta/%D8%AA%D9%90%D9%84%D9%92%D9%85%D9%90%D9%8A%D8%B0%D9%8C(2).m4a',image: require('../../../assets/images/student.webp')  },
];
const uniqueSoundForTa = {
  label: 'ت', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Ta/%D8%AA%D9%8E%D8%A7%D8%A1%D9%8C.m4a',
};

const secondSoundFiles = [
  { label:'تَ', file:'https://f005.backblazeb2.com/file/Hurouf/Ta/%D8%AA%D9%8E.m4a'},
  { label: 'تُ', file:'https://f005.backblazeb2.com/file/Hurouf/Ta/%D8%AA%D9%8F.m4a'},
  { label: 'تِ', file:'https://f005.backblazeb2.com/file/Hurouf/Ta/%D8%AA%D9%90.m4a'}, 

]

const TaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ت" soundFiles={soundFilesForTa} uniqueSound={uniqueSoundForTa} secondSoundFiles={secondSoundFiles}/>

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

export default TaScreen;
