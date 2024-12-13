import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForKha = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'خَاتَمٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/ring.webp') },
    { label: 'خُبْزٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/bread.webp')},
    { label: 'خِزَانَةٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/closet.png')  },
];
const uniqueSoundForKha = {
  label: 'خ', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'خَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'خُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'خِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const KhaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="خ" soundFiles={soundFilesForKha} uniqueSound={uniqueSoundForKha} secondSoundFiles={secondSoundFiles}/>

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

export default KhaScreen;
