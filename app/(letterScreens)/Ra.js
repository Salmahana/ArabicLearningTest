import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForRa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'رَمْلٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/sand.webp') },
    { label: 'رُمَّانٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/Pomegranate.webp')},
    { label: 'رِيشَةٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/feather.webp')  },
];
const uniqueSoundForRa = {
  label: 'ر', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'رَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'رُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'رِ', file: require('../../assets/sounds/E.m4a')}, 

]

const RaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ر" soundFiles={soundFilesForRa} uniqueSound={uniqueSoundForRa} secondSoundFiles={secondSoundFiles}/>

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

export default RaScreen;
