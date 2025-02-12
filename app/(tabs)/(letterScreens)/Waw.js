import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForWaw = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'وَرَقَةٌ', file: require('../../../assets/sounds/lion.m4a'), image: require('../../../assets/images/leaf.webp') },
    { label: 'وُرُودٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/roses.webp')},
    { label: 'وِسَادَةٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/pillow.webp')  },
];
const uniqueSoundForWaw = {
  label: 'و', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'وَ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'وُ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'وِ', file: require('../../../assets/sounds/E.m4a')}, 

]

const WawScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="و" soundFiles={soundFilesForWaw} uniqueSound={uniqueSoundForWaw} secondSoundFiles={secondSoundFiles}/>

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

export default WawScreen;
