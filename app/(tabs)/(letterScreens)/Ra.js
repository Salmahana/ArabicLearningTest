import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForRa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'رَمْلٌ', file :'https://f005.backblazeb2.com/file/Hurouf/Ra/%D8%B1%D9%8E%D9%85%D9%92%D9%80%D9%84%D9%8C.m4a ', image: require('../../../assets/images/sand.webp') },
    { label: 'رُمَّانٌ', file :' https://f005.backblazeb2.com/file/Hurouf/Ra/%D8%B1%D9%8F%D9%85%D9%91%D9%8E%D8%A2%D9%86%D9%8C.m4a', image: require('../../../assets/images/Pomegranate.webp')},
    { label: 'رِيشَةٌ',  file :'https://f005.backblazeb2.com/file/Hurouf/Ra/%D8%B1%D9%90%D9%8A%D8%B4%D9%8E%D8%A9%D9%8C.m4a ',image: require('../../../assets/images/feather.webp')  },
];
const uniqueSoundForRa = {
  label: 'ر', 
 file :'https://f005.backblazeb2.com/file/Hurouf/Ra/%D8%B1%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'رَ',  file :'https://f005.backblazeb2.com/file/Hurouf/Ra/%D9%80%D8%B1%D9%8E%D8%A7.m4a '},
  { label: 'رُ',  file :'https://f005.backblazeb2.com/file/Hurouf/Ra/%D9%80%D8%B1%D9%8F.m4a '},
  { label: 'رِ',  file :'https://f005.backblazeb2.com/file/Hurouf/Ra/%D9%80%D8%B1%D9%90%D9%8A.m4a '}, 

]

const RaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ر" soundFiles={soundFilesForRa} uniqueSound={uniqueSoundForRa} secondSoundFiles={secondSoundFiles}/>

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

export default RaScreen;
