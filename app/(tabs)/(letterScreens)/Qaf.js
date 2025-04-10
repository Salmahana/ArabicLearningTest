import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForQaf = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'قَلَمٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Qaf/%D9%82%D9%8E%D9%84%D9%8E%D9%85%D9%8C.m4a ', image: require('../../../assets/images/pen.webp') },
    { label: 'قُنْفُذٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Qaf/%D9%82%D9%8F%D9%86%D9%92%D9%81%D9%8F%D8%B0%D9%8C.m4a ', image: require('../../../assets/images/hedgehog.webp')},
    { label: 'قِطَّةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Qaf/%D9%82%D9%90%D8%B7%D9%91%D9%8E%D8%A9%D9%8C.m4a ',image: require('../../../assets/images/cat.webp')  },
];
const uniqueSoundForQaf = {
  label: 'ق', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Qaf/%D9%82%D9%8E%D8%A7%D9%81%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'قَ', file:'https://f005.backblazeb2.com/file/Hurouf/Qaf/%D9%82%D9%8E.m4a '},
  { label: 'قُ', file:' https://f005.backblazeb2.com/file/Hurouf/Qaf/%D9%82%D9%8F.m4a'},
  { label: 'قِ', file:'https://f005.backblazeb2.com/file/Hurouf/Qaf/%D9%82%D9%90.m4a '}, 

]

const QafScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ق" soundFiles={soundFilesForQaf} uniqueSound={uniqueSoundForQaf} secondSoundFiles={secondSoundFiles}/>

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

export default QafScreen;
