import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForSin = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'سَرِيرٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Sin/%D8%B3%D9%8E%D8%B1%D9%90%D9%8A%D8%B1%D9%8C.m4a ', image: require('../../../assets/images/bed.webp') },
    { label: 'سُلَحْفَاةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Sin/%D8%B3%D9%8F%D9%84%D9%8E%D8%AD%D9%92%D9%81%D9%8E%D8%A7%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/turtle.webp')},
    { label: 'سِرْوَالٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Sin/%D8%B3%D9%90%D8%B1%D9%92%D9%88%D9%8E%D8%A7%D9%84%D9%8C.m4a ',image: require('../../../assets/images/pants.webp')  },
];
const uniqueSoundForSin = {
  label: 'س', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Sin/%D8%B3%D9%90%D9%8A%D9%8A%D9%86%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'سَـ', file:'https://f005.backblazeb2.com/file/Hurouf/Sin/%D9%80%D8%B3%D9%8E.m4a '},
  { label: 'سُـ', file:'https://f005.backblazeb2.com/file/Hurouf/Sin/%D8%B3%D9%8F.m4a '},
  { label: 'سِـ', file:'https://f005.backblazeb2.com/file/Hurouf/Sin/%D8%B3%D9%90.m4a '}, 

]

const SinScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="س" soundFiles={soundFilesForSin} uniqueSound={uniqueSoundForSin} secondSoundFiles={secondSoundFiles}/>

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

export default SinScreen;
