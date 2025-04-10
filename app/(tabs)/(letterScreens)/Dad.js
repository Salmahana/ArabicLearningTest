import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForDad = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ضَوْءٌ', file:' https://f005.backblazeb2.com/file/Hurouf/Dad/%D8%B6%D9%8E%D9%88%D9%92%D8%A1%D9%8C.m4a', image: require('../../../assets/images/light.webp') },
    { label: 'ضُرُوسٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Dad/%D8%B6%D9%8F%D8%B1%D9%8F%D9%88%D9%88%D8%B3%D9%8C.m4a ', image: require('../../../assets/images/molars.webp')},
    { label: 'ضِفْدَعٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Dad/%D8%B6%D9%90%D9%81%D9%92%D8%AF%D9%8E%D8%B9%D9%8C.m4a ',image: require('../../../assets/images/frog.webp')  },
];
const uniqueSoundForDad = {
  label: 'ض', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Dad/%D8%B6%D9%8E%D8%A7%D8%AF%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'ضَـ', file:'https://f005.backblazeb2.com/file/Hurouf/Dad/%D8%B6%D9%8E.m4a '},
  { label: 'ضُـ', file:'https://f005.backblazeb2.com/file/Hurouf/Dad/%D8%B6%D9%8F.m4a '},
  { label: 'ضِـ', file:'https://f005.backblazeb2.com/file/Hurouf/Dad/%D8%B6%D9%90.m4a '}, 

]

const DadScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ض" soundFiles={soundFilesForDad} uniqueSound={uniqueSoundForDad} secondSoundFiles={secondSoundFiles}/>

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

export default DadScreen;
