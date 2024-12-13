import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForLam = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'لَيْمُونٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/lemon.webp') },
    { label: 'لُعْبَةٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/toy.webp')},
    { label: 'لِسَانٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/tongue.webp')  },
];
const uniqueSoundForLam = {
  label: 'ل', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'لَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'لُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'لِ', file: require('../../assets/sounds/E.m4a')}, 

]

const LamScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ل" soundFiles={soundFilesForLam} uniqueSound={uniqueSoundForLam} secondSoundFiles={secondSoundFiles}/>

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

export default LamScreen;
