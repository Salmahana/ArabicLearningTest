// letterScreens/AlifScreen.js
import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import { View, Text } from 'react-native';

const soundFilesForAlif = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'أَسَدٌ', file: require('../../../assets/sounds/octopus.mp3'), image: require('../../../assets/images/Asad.webp') },
    { label: 'أُخْطُبُوطٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/okhtobout.jpg')},
    { label: 'إِوَزَّةٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/ewaza.jpg')  },
];
const uniqueSoundForAlif = {
  label: 'أ', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'أَ', file: require('../../../assets/sounds/a.mp3')},
  { label: 'أُ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'إِ', file: require('../../../assets/sounds/E.m4a')}, 

]

const AlifScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="أ" soundFiles={soundFilesForAlif} uniqueSound={uniqueSoundForAlif} secondSoundFiles={secondSoundFiles}/>

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

export default AlifScreen;
