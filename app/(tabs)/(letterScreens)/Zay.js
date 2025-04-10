import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForZay = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'زَيْتُونٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Zay/%D8%B2%D9%8E%D9%8A%D9%92%D8%AA%D9%8F%D9%88%D9%8F%D9%86%D9%8C.m4a ', image: require('../../../assets/images/olives.webp') },
    { label: 'زُجَاجَةٌ', file: ' https://f005.backblazeb2.com/file/Hurouf/Zay/%D8%B2%D9%8F%D8%AC%D9%8E%D8%A7%D8%AC%D9%8E%D8%A9%D9%8C.m4a', image: require('../../../assets/images/bottle.webp')},
    { label: 'زِرٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Zay/%D8%B2%D9%90%D8%B1%D9%92%D8%B1%D9%8C.m4a ',image: require('../../../assets/images/Button.webp')  },
];
const uniqueSoundForZay = {
  label: 'ز', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Zay/%D8%B2%D9%8E%D8%A7%D9%8A%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'زَ', file: 'https://f005.backblazeb2.com/file/Hurouf/Zay/%D9%80%D8%B2%D9%8E%D8%A7.m4a '},
  { label: 'زُ', file: 'https://f005.backblazeb2.com/file/Hurouf/Zay/%D9%80%D8%B2%D9%8F.m4a '},
  { label: 'زِ', file: 'https://f005.backblazeb2.com/file/Hurouf/Zay/%D9%80%D8%B2%D9%90.m4a'}, 

]

const ZayScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ز" soundFiles={soundFilesForZay} uniqueSound={uniqueSoundForZay} secondSoundFiles={secondSoundFiles}/>

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

export default ZayScreen;
