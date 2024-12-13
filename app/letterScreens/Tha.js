import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForTha = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ثَعْلَبٌ', file: require('../../assets/sounds/fox.m4a'), image: require('../../assets/images/fox.webp') },
    { label: 'ثُعْبَانٌ', file: require('@/assets/sounds/snake.mp3'), image: require('../../assets/images/snake.webp')},
    { label: 'ثِيَابٌ', file: require('../../assets/sounds/clothing.mp3'),image: require('../../assets/images/clothing.jpg')  },
];
const uniqueSoundForTha = {
  label: 'ث', 
  file: require('../../assets/sounds/thae.m4a'),
};

const secondSoundFiles = [
  { label:'ثَ', file: require('../../assets/sounds/A.m4a')},
  { label: 'ثُ', file: require('../../assets/sounds/O.m4a')},
  { label: 'ثِ', file: require('../../assets/sounds/E.m4a')}, 

]

const ThaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ث" soundFiles={soundFilesForTha} uniqueSound={uniqueSoundForTha} secondSoundFiles={secondSoundFiles}/>

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

export default ThaScreen;
