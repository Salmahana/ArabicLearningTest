import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForJim = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'جَرَسٌ', file: require('../../../assets/sounds/bell.m4a'), image: require('../../../assets/images/bell.webp') },
    { label: 'جُبْنٌ', file: require('@/assets/sounds/cheese.m4a'), image: require('../../../assets/images/cheese.webp')},
    { label: 'جِمَالٌ', file: require('../../../assets/sounds/camels.m4a'),image: require('../../../assets/images/Camels.webp')  },
];
const uniqueSoundForJim = {
  label: 'ج', 
  file: require('../../../assets/sounds/jimun.m4a'),
};

const secondSoundFiles = [
  { label:'جَـ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'جُـ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'جِـ', file: require('../../../assets/sounds/E.m4a')}, 

]

const JimScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ج" soundFiles={soundFilesForJim} uniqueSound={uniqueSoundForJim} secondSoundFiles={secondSoundFiles}/>

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

export default JimScreen;
