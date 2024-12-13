import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForMim = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'مَاءٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/water.webp') },
    { label: 'مُعَلِّمَةٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/teacher.webp')},
    { label: 'مِنْطَادٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/balloon.webp')  },
];
const uniqueSoundForMim = {
  label: 'م', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'مَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'مُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'مِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const MimScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="م" soundFiles={soundFilesForMim} uniqueSound={uniqueSoundForMim} secondSoundFiles={secondSoundFiles}/>

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

export default MimScreen;
