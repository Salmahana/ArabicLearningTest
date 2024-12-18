import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForSin = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'سَرِيرٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/bed.webp') },
    { label: 'سُلَحْفَاةٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/turtle.webp')},
    { label: 'سِرْوَالٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/pants.webp')  },
];
const uniqueSoundForSin = {
  label: 'س', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'سَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'سُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'سِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const SinScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="س" soundFiles={soundFilesForSin} uniqueSound={uniqueSoundForSin} secondSoundFiles={secondSoundFiles}/>

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

export default SinScreen;
