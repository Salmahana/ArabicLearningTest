import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForWaw = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'وَرَقَةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Waw/%D9%88%D9%8E%D8%B1%D9%8E%D9%82%D9%8E%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/leaf.webp') },
    { label: 'وُرُودٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Waw/%D9%88%D9%8F%D8%B1%D9%8F%D9%88%D8%AF%D9%8C.m4a ', image: require('../../../assets/images/roses.webp')},
    { label: 'وِسَادَةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Waw/%D9%88%D9%90%D8%B3%D9%8E%D8%A7%D8%AF%D9%8E%D8%A9%D9%8C.m4a ',image: require('../../../assets/images/pillow.webp')  },
];
const uniqueSoundForWaw = {
  label: 'و', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Waw/%D9%88%D9%8E%D8%A7%D9%88%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'وَ', file:'https://f005.backblazeb2.com/file/Hurouf/Waw/%D9%88%D9%8E.m4a'},
  { label: 'وُ', file:'https://f005.backblazeb2.com/file/Hurouf/Waw/%D9%88%D9%8F.m4a'},
  { label: 'وِ', file:'https://f005.backblazeb2.com/file/Hurouf/Waw/%D9%88%D9%90.m4a'}, 

]

const WawScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="و" soundFiles={soundFilesForWaw} uniqueSound={uniqueSoundForWaw} secondSoundFiles={secondSoundFiles}/>

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

export default WawScreen;
