// letterScreens/AlifScreen.js
import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import { View, Text } from 'react-native';

const soundFilesForAlif = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'أَسَدٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Alef/lion.m4a', image: require('../../../assets/images/Asad.webp') },
    { label: 'أُخْطُبُوطٌ',file: 'https://f005.backblazeb2.com/file/Hurouf/Alef/octopus.m4a' , image: require('../../../assets/images/okhtobout.jpg')},
    { label: 'إِوَزَّةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Alef/goose.m4a',image: require('../../../assets/images/ewaza.jpg')  },
    // file: require('@/assets/sounds/octopus.m4a')
];
const uniqueSoundForAlif = {
  label: 'أ', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Alef/%D8%A3%D9%8E%D9%84%D9%90%D9%81%D9%8C.m4a',
};

const secondSoundFiles = [
  { label:'أَ', file:'https://f005.backblazeb2.com/file/Hurouf/Alef/A-aicha.m4a' },
  { label: 'أُ', file:'https://f005.backblazeb2.com/file/Hurouf/Alef/O-aicha.m4a'},
  { label: 'إِ', file:'https://f005.backblazeb2.com/file/Hurouf/Alef/E-aicha.m4a'}, 

]

const AlifScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="أ" soundFiles={soundFilesForAlif} uniqueSound={uniqueSoundForAlif} secondSoundFiles={secondSoundFiles}/>

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

export default AlifScreen;
