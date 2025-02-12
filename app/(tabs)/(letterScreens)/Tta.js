import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForTta = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'طَمَاطِمٌ', file: require('../../../assets/sounds/lion.m4a'), image: require('../../../assets/images/tomatoes.webp') },
    { label: 'طُيُورٌ', file: require('@/assets/sounds/octopus.m4a'), image: require('../../../assets/images/birds.webp')},
    { label: 'طِفْلٌ', file: require('../../../assets/sounds/goose.m4a'),image: require('../../../assets/images/boy.png')  },
];
const uniqueSoundForTta = {
  label: 'ط', 
  file: require('../../../assets/sounds/alef.m4a'),
};

const secondSoundFiles = [
  { label:'طَ', file: require('../../../assets/sounds/A.m4a')},
  { label: 'طُ', file: require('../../../assets/sounds/O.m4a')},
  { label: 'طِ', file: require('../../../assets/sounds/E.m4a')}, 

]

const TtaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ط" soundFiles={soundFilesForTta} uniqueSound={uniqueSoundForTta} secondSoundFiles={secondSoundFiles}/>

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

export default TtaScreen;
