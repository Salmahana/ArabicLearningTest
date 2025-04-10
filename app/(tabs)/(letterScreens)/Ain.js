import React from 'react';
// import LetterScreen from '../../components/LetterScreen';
import LetterScreen from '../../../components/LetterScreen';
import { View, Text } from 'react-native';

const soundFilesForAin = [
    // { label: 'عَلَمٌ', file: require('../../assets/sounds/lion.m4a'), image: require('../../assets/images/flag.webp') },
    { label: 'عَلَمٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ain/%D8%B9%D9%8E%D9%84%D9%8E%D9%85%D9%8C.m4a ', image: require('../../../assets/images/flag.webp') },
    { label: 'عُصْفُورٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ain/%D8%B9%D9%8F%D8%B5%D9%92%D9%81%D9%8F%D9%88%D8%B1%D9%8C.m4a ', image: require('../../../assets/images/bird.webp')},
    { label: 'عِنَبٌ', file: ' https://f005.backblazeb2.com/file/Hurouf/Ain/%D8%B9%D9%90%D9%86%D9%8E%D8%A8%D9%8C.m4a',image: require('../../../assets/images/grapes.webp')  },
];
const uniqueSoundForAin = {
  label: 'ع', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Ain/%D8%B9%D9%8E%D9%8A%D9%92%D9%86%D9%8C.m4a',
};

const secondSoundFiles = [
  { label:'عَـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ain/%D8%B9%D9%8E.m4a '},
  { label: 'عُـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ain/%D8%B9%D9%8F.m4a '},
  { label: 'عِـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Ain/%D8%B9%D9%90.m4a '}, 

]

const AinScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ع" soundFiles={soundFilesForAin} uniqueSound={uniqueSoundForAin} secondSoundFiles={secondSoundFiles}/>

  </View>
)}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default AinScreen;
