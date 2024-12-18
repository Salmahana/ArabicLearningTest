import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForYa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'يَدٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/hand.webp') },
    { label: 'يُصَلِّي', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/praying.webp')},
    { label: 'يَقْطِينَةٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/pumpkin.webp')  },
];
const uniqueSoundForYa = {
  label: 'ي', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'يـَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'يُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'ـيـ', file: require('../../assets/sounds/E.m4a')}, 

]

const YaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ي" soundFiles={soundFilesForYa} uniqueSound={uniqueSoundForYa} secondSoundFiles={secondSoundFiles}/>

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

export default YaScreen;
