import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForThdal = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ذَهَبٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/Gold.webp') },
    { label: 'ذُرَةٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/corn.webp')},
    { label: 'ذِئْبٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/wolf.webp')  },
];
const uniqueSoundForThdal = {
  label: 'ذ', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'ذَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'ذُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'ذِ', file: require('../../assets/sounds/E.m4a')}, 

]

const ThdalScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ذ" soundFiles={soundFilesForThdal} uniqueSound={uniqueSoundForThdal} secondSoundFiles={secondSoundFiles}/>

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

export default ThdalScreen;
