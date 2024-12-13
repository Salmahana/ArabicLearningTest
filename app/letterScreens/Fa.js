import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForFa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'فَرَاشَةٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/butterfly.webp') },
    { label: 'فُلْفُلٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/pepper.webp')},
    { label: 'فِيلٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/elephant.webp')  },
];
const uniqueSoundForFa = {
  label: 'ف', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'فَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'فُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'فِ', file: require('../../assets/sounds/E.m4a')}, 

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
