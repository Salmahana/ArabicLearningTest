import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForMim = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'مَاءٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Mim/%D9%85%D9%8E%D8%A7%D8%A1%D9%8C.m4a ', image: require('../../../assets/images/water.webp') },
    { label: 'مُعَلِّمَةٌ',  file: 'https://f005.backblazeb2.com/file/Hurouf/Mim/%D9%85%D9%8F%D8%B9%D9%8E%D9%84%D9%91%D9%90%D9%85%D9%8E%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/teacher.webp')},
    { label: 'مِنْطَادٌ',  file: 'https://f005.backblazeb2.com/file/Hurouf/Mim/%D9%85%D9%90%D9%86%D9%92%D8%B7%D9%8E%D8%A7%D8%AF%D9%8C.m4a ',image: require('../../../assets/images/balloon.webp')  },
];
const uniqueSoundForMim = {
  label: 'م', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Mim/%D9%85%D9%90%D9%8A%D9%85%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'مَـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Mim/%D9%85%D9%8E%D8%A7.m4a '},
  { label: 'مُـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Mim/%D9%85%D9%8F.m4a '},
  { label: 'مِـ',  file: 'https://f005.backblazeb2.com/file/Hurouf/Mim/%D9%85%D9%90.m4a '}, 

]

const MimScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="م" soundFiles={soundFilesForMim} uniqueSound={uniqueSoundForMim} secondSoundFiles={secondSoundFiles}/>

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

export default MimScreen;
