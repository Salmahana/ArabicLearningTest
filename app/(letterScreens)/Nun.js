import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForNun = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'نَحْلَةٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/bee.webp') },
    { label: 'نُجُومٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/stars.webp')},
    { label: 'نِسَاءٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/women.webp')  },
];
const uniqueSoundForNun = {
  label: 'ن', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'نَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'نُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'نِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const NunScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ن" soundFiles={soundFilesForNun} uniqueSound={uniqueSoundForNun} secondSoundFiles={secondSoundFiles}/>

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

export default NunScreen;
