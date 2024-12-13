import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForThdae = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ظَرْفٌ ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/envelope.webp') },
    { label: 'ظُفْرٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/nail.webp')},
    { label: 'ظِلٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/shadow.webp')  },
];
const uniqueSoundForThdae = {
  label: 'ظ', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'ظَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'ظُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'ظِ', file: require('../../assets/sounds/E.m4a')}, 

]

const ThdaeScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ظ" soundFiles={soundFilesForThdae} uniqueSound={uniqueSoundForThdae} secondSoundFiles={secondSoundFiles}/>

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

export default ThdaeScreen;
