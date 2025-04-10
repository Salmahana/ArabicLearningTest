import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForLam = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'لَيْمُونٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Lam/%D9%84%D9%8E%D9%8A%D9%92%D9%85%D9%8F%D9%88%D9%88%D9%86%D9%8C.m4a ', image: require('../../../assets/images/lemon.webp') },
    { label: 'لُعْبَةٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Lam/%D9%84%D9%8F%D8%B9%D9%92%D8%A8%D9%8E%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/toy.webp')},
    { label: 'لِسَانٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Lam/%D9%84%D9%90%D8%B3%D9%8E%D8%A7%D9%86%D9%8C.m4a ',image: require('../../../assets/images/tongue.webp')  },
];
const uniqueSoundForLam = {
  label: 'ل', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Lam/%D9%84%D9%8E%D8%A7%D9%85%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'لَ', file: 'https://f005.backblazeb2.com/file/Hurouf/Lam/%D9%84%D9%8E.m4a '},
  { label: 'لُ', file: 'https://f005.backblazeb2.com/file/Hurouf/Lam/%D9%84%D9%8F.m4a '},
  { label: 'لِ', file: 'https://f005.backblazeb2.com/file/Hurouf/Lam/%D9%84%D9%90.m4a '}, 

]

const LamScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ل" soundFiles={soundFilesForLam} uniqueSound={uniqueSoundForLam} secondSoundFiles={secondSoundFiles}/>

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

export default LamScreen;
