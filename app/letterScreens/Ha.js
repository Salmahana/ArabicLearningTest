import React from 'react';
import LetterScreen from '../../components/LetterScreen';
import SoundButton from '../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForHa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'حَلْوَى', file: require('../../assets/sounds/candy.m4a'), image: require('../../assets/images/candy.webp') },
    { label: 'حُوتٌ', file: require('@/assets/sounds/whale.m4a'), image: require('../../assets/images/whale.jpg')},
    { label: 'حِذَاءٌ', file: require('../../assets/sounds/shoes.m4a'),image: require('../../assets/images/shoes.jpg')  },
];
const uniqueSoundForHa = {
  label: 'ح', 
  file: require('../../assets/sounds/haeun.m4a'),
};

const secondSoundFiles = [
  { label:'حَـ', file: require('../../assets/sounds/A.m4a')},
  { label: 'حُـ', file: require('../../assets/sounds/O.m4a')},
  { label: 'حِـ', file: require('../../assets/sounds/E.m4a')}, 

]

const HaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ح" soundFiles={soundFilesForHa} uniqueSound={uniqueSoundForHa} secondSoundFiles={secondSoundFiles}/>

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

export default HaScreen;
