import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForTa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'تَاجٌ', file: require('../../assets/sounds/crown.m4a'), image: require('../../assets/images/crown.jpg') },
    { label: 'تُفَّاحَةٌ', file: require('@/assets/sounds/apple.m4a'), image: require('../../assets/images/apple.webp')},
    { label: 'تِلْمِيذٌ', file: require('../../assets/sounds/student.m4a'),image: require('../../assets/images/student.webp')  },
];
const uniqueSoundForTa = {
  label: 'ت', 
  file: require('../../assets/sounds/tae.m4a'),
};

const secondSoundFiles = [
  { label:'تَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'تُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'تِ', file: require('../../assets/sounds/E.m4a')}, 

]

const TaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ت" soundFiles={soundFilesForTa} uniqueSound={uniqueSoundForTa} secondSoundFiles={secondSoundFiles}/>

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

export default TaScreen;
