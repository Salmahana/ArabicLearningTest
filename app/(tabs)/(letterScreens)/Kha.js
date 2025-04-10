import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForKha = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'خَاتَمٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Kha/%D8%AE%D9%8E%D8%A7%D8%AA%D9%8E%D9%85%D9%8C.m4a ', image: require('../../../assets/images/ring.webp') },
    { label: 'خُبْزٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Kha/%D8%AE%D9%8F%D8%A8%D9%92%D8%B2%D9%8C.m4a ', image: require('../../../assets/images/bread.webp')},
    { label: 'خِزَانَةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Kha/%D8%AE%D9%90%D8%B2%D9%8E%D8%A7%D9%86%D9%8E%D8%A9%D9%8C.m4a ',image: require('../../../assets/images/closet.png')  },
];
const uniqueSoundForKha = {
  label: 'خ', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Kha/%D8%AE%D9%8E%D8%A7%D8%A1%D9%8C.m4a',
};

const secondSoundFiles = [
  { label:'خَـ', file:'https://f005.backblazeb2.com/file/Hurouf/Kha/%D9%80%D8%AE%D9%8E%D9%80.m4a '},
  { label: 'خُـ', file:'https://f005.backblazeb2.com/file/Hurouf/Kha/%D9%80%D8%AE%D9%8F%D9%80.m4a' },
  { label: 'خِـ', file:'https://f005.backblazeb2.com/file/Hurouf/Kha/%D9%80%D8%AE%D9%90%D9%80.m4a '}, 

]

const KhaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="خ" soundFiles={soundFilesForKha} uniqueSound={uniqueSoundForKha} secondSoundFiles={secondSoundFiles}/>

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

export default KhaScreen;
