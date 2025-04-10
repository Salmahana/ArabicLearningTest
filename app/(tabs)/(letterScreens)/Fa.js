import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForFa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'فَرَاشَةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Fa/%D9%81%D9%8E%D8%B1%D9%8E%D8%A7%D8%B4%D9%8E%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/butterfly.webp') },
    { label: 'فُلْفُلٌ',  file:'https://f005.backblazeb2.com/file/Hurouf/Fa/%D9%81%D9%8F%D9%84%D9%92%D9%81%D9%8F%D9%84%D9%8C.m4a ', image: require('../../../assets/images/pepper.webp')},
    { label: 'فِيلٌ',  file:'https://f005.backblazeb2.com/file/Hurouf/Fa/%D9%81%D9%90%D9%8A%D9%8A%D9%84%D9%8C.m4a ',image: require('../../../assets/images/elephant.webp')  },
];
const uniqueSoundForFa = {
  label: 'ف', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Fa/%D9%81%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'فَ',  file:'https://hurouf.s3.us-east-005.backblazeb2.com/Fa/%D9%81%D9%8E.m4a '},
  { label: 'فُ',  file:'https://f005.backblazeb2.com/file/Hurouf/Fa/%D9%81%D9%8F.m4a '},
  { label: 'فِ',  file:'https://f005.backblazeb2.com/file/Hurouf/Fa/%D9%81%D9%90.m4a '}, 

]

const FaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ف" soundFiles={soundFilesForFa} uniqueSound={uniqueSoundForFa} secondSoundFiles={secondSoundFiles}/>

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

export default FaScreen;
