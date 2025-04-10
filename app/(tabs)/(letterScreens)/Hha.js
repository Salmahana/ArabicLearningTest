import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForHha = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'هَرَمٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Hha/%D9%87%D9%8E%D8%B1%D9%8E%D9%85%D9%8C.m4a ', image: require('../../../assets/images/pyramid.webp') },
    { label: 'هُدْهُدٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Hha/%D9%87%D9%8F%D8%AF%D9%92%D9%87%D9%8F%D8%AF%D9%8C.m4a ', image: require('../../../assets/images/hoopoe.webp')},
    { label: 'هِلَالٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Hha/%D9%87%D9%90%D9%84%D9%8E%D8%A7%D9%84%D9%8C.m4a ',image: require('../../../assets/images/crescent.webp')  },
];
const uniqueSoundForHha = {
  label: 'هـ', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Hha/%D9%87%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'هَـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Hha/%D9%87%D9%8E.m4a '},
  { label: 'هُـ',file: 'https://f005.backblazeb2.com/file/Hurouf/Hha/%D9%87%D9%8F.m4a '},
  { label: 'هِــ', file: 'https://f005.backblazeb2.com/file/Hurouf/Hha/%D9%87%D9%90.m4a '}, 

]

const HhaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="هـ" soundFiles={soundFilesForHha} uniqueSound={uniqueSoundForHha} secondSoundFiles={secondSoundFiles}/>

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

export default HhaScreen;
