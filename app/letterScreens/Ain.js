import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForAin = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'عَلَمٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/flag.webp') },
    { label: 'عُصْفُورٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/bird.webp')},
    { label: 'عِنَبٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/grapes.webp')  },
];
const uniqueSoundForAin = {
  label: 'ع', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'عَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'عُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'عِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const AinScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ع" soundFiles={soundFilesForAin} uniqueSound={uniqueSoundForAin} secondSoundFiles={secondSoundFiles}/>

  </View>
)}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default AinScreen;
