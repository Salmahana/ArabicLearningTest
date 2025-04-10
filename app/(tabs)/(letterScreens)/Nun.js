import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForNun = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'نَحْلَةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Nun/%D9%86%D9%8E%D8%AD%D9%92%D9%84%D9%8E%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/bee.webp') },
    { label: 'نُجُومٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Nun/%D9%86%D9%8F%D8%AC%D9%8F%D9%88%D9%85%D9%8C.m4a ', image: require('../../../assets/images/stars.webp')},
    { label: 'نِسَاءٌ',file:'https://f005.backblazeb2.com/file/Hurouf/Nun/%D9%86%D9%90%D8%B3%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',image: require('../../../assets/images/women.webp')  },
];
const uniqueSoundForNun = {
  label: 'ن', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Nun/%D9%86%D9%8F%D9%88%D9%86%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'نَـ',file:'https://f005.backblazeb2.com/file/Hurouf/Nun/%D9%86%D9%8E.m4a '},
  { label: 'نُـ', file:'https://f005.backblazeb2.com/file/Hurouf/Nun/%D9%86%D9%8F.m4a '},
  { label: 'نِـ', file:'https://f005.backblazeb2.com/file/Hurouf/Nun/%D9%86%D9%90.m4a '}, 

]

const NunScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ن" soundFiles={soundFilesForNun} uniqueSound={uniqueSoundForNun} secondSoundFiles={secondSoundFiles}/>

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

export default NunScreen;
