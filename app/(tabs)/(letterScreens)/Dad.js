import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForDad = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ضَوْءٌ', file: require('../../../assets/sounds/lion.m4a'), image: require('../../../assets/images/light.webp') },
    { label: 'ضُرُوسٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/molars.webp')},
    { label: 'ضِفْدَعٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/frog.webp')  },
];
const uniqueSoundForDad = {
  label: 'ض', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'ضَـ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'ضُـ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'ضِـ', file: require('../../../assets/sounds/E.m4a')}, 

]

const DadScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ض" soundFiles={soundFilesForDad} uniqueSound={uniqueSoundForDad} secondSoundFiles={secondSoundFiles}/>

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

export default DadScreen;
