import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForKaf = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'كَلْبٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/dog.webp') },
    { label: 'كُرَةٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/ball.webp')},
    { label: 'كِتَابٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/book.webp')  },
];
const uniqueSoundForKaf = {
  label: 'كـ', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'كَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'كُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'كِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const KafScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="كـ" soundFiles={soundFilesForKaf} uniqueSound={uniqueSoundForKaf} secondSoundFiles={secondSoundFiles}/>

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

export default KafScreen;
