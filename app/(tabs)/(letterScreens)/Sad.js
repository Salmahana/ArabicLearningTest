import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForSad = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'صَارُوخٌ', file: require('../../../assets/sounds/lion.m4a'), image: require('../../../assets/images/rocket.webp') },
    { label: 'صُنْدُوقٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/box.webp')},
    { label: 'صِنَّارَةٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/fishing.webp')  },
];
const uniqueSoundForSad = {
  label: 'ص', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'صَـ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'صُـ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'صِـ', file: require('../../../assets/sounds/E.m4a')}, 

]

const SadScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ص" soundFiles={soundFilesForSad} uniqueSound={uniqueSoundForSad} secondSoundFiles={secondSoundFiles}/>

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

export default SadScreen;
