import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForGhain = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'غَزَالٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ghain/%D8%BA%D9%8E%D8%B2%D9%8E%D8%A7%D9%84%D9%8C.m4a ', image: require('../../../assets/images/gazelle.webp') },
    { label: 'غُرَابٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ghain/%D8%BA%D9%8F%D8%B1%D9%8E%D8%A7%D8%A8%D9%8C.m4a ', image: require('../../../assets/images/crow.webp')},
    { label: 'غِذَاءٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ghain/%D8%BA%D9%90%D8%B0%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',image: require('../../../assets/images/food.webp')  },
];
const uniqueSoundForGhain = {
  label: 'غ', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Ghain/%D8%BA%D9%8E%D9%8A%D9%92%D9%86%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'غَـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ghain/%D8%BA%D9%8E.m4a '},
  { label: 'غُـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ghain/%D8%BA%D9%8F.m4a '},
  { label: 'غِـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ghain/%D8%BA%D9%90.m4a '}, 

]

const GhainScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="غ" soundFiles={soundFilesForGhain} uniqueSound={uniqueSoundForGhain} secondSoundFiles={secondSoundFiles}/>

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

export default GhainScreen;
