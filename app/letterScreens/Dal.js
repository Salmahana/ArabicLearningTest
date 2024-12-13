import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForDal = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'دَرَّاجَةٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/bicycle.webp') },
    { label: 'دُبٌّ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../assets/images/bear.webp')},
    { label: 'دِيكٌ', file: require('../../assets/sounds/goose.m4a'),image: require('../../assets/images/rooster.webp')  },
];
const uniqueSoundForDal = {
  label: 'د', 
  file: require('../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'دَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'دُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'دِ', file: require('../../assets/sounds/E.m4a')}, 

]

const DalScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="د" soundFiles={soundFilesForDal} uniqueSound={uniqueSoundForDal} secondSoundFiles={secondSoundFiles}/>

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

export default DalScreen;
