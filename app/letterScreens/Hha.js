import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForHha = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'هَرَمٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/pyramid.webp') },
    { label: 'هُدْهُدٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/hoopoe.webp')},
    { label: 'هِلَالٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/crescent.webp')  },
];
const uniqueSoundForHha = {
  label: 'هـ', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'هَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'هُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'هِــ', file: require('../../assets/sounds/E.m4a')}, 

]

const HhaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="هـ" soundFiles={soundFilesForHha} uniqueSound={uniqueSoundForHha} secondSoundFiles={secondSoundFiles}/>

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

export default HhaScreen;
