import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForGhain = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'غَزَالٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/gazelle.webp') },
    { label: 'غُرَابٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/crow.webp')},
    { label: 'غِذَاءٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/food.webp')  },
];
const uniqueSoundForGhain = {
  label: 'غ', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'غَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'غُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'غِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const GhainScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="غ" soundFiles={soundFilesForGhain} uniqueSound={uniqueSoundForGhain} secondSoundFiles={secondSoundFiles}/>

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

export default GhainScreen;
