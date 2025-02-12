import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForZay = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'زَيْتُونٌ', file: require('../../../assets/sounds/lion.m4a'), image: require('../../../assets/images/olives.webp') },
    { label: 'زُجَاجَةٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/bottle.webp')},
    { label: 'زِرٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/Button.webp')  },
];
const uniqueSoundForZay = {
  label: 'ز', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'زَ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'زُ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'زِ', file: require('../../../assets/sounds/E.m4a')}, 

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
