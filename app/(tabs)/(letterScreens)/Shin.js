import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForShin = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'شَمْسٌ', file: require('../../../assets/sounds/lion.m4a'), image: require('../../../assets/images/sun.webp') },
    { label: 'شُرْطِيٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/police.webp')},
    { label: 'شِرَاعٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/sail.webp')  },
];
const uniqueSoundForShin = {
  label: 'ش', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'شَـ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'شُـ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'شِـ', file: require('../../../assets/sounds/E.m4a')}, 

]

const ShinScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ش" soundFiles={soundFilesForShin} uniqueSound={uniqueSoundForShin} secondSoundFiles={secondSoundFiles}/>

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

export default ShinScreen;
