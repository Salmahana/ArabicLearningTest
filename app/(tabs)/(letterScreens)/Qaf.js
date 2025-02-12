import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForQaf = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'قَلَمٌ', file: require('../../../assets/sounds/lion.m4a'), image: require('../../../assets/images/pen.webp') },
    { label: 'قُنْفُذٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/hedgehog.webp')},
    { label: 'قِطَّةٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/cat.webp')  },
];
const uniqueSoundForQaf = {
  label: 'ق', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'قَ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'قُ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'قِ', file: require('../../../assets/sounds/E.m4a')}, 

]

const QafScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ق" soundFiles={soundFilesForQaf} uniqueSound={uniqueSoundForQaf} secondSoundFiles={secondSoundFiles}/>

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

export default QafScreen;
