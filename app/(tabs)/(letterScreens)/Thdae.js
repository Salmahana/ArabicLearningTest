import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForThdae = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ظَرْفٌ ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdae/%D8%B8%D9%8E%D8%B1%D9%92%D9%81%D9%8C.m4a ', image: require('../../../assets/images/envelope.webp') },
    { label: 'ظُفْرٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdae/%D8%B8%D9%8F%D9%81%D9%92%D8%B1%D9%8C.m4a ', image: require('../../../assets/images/nail.webp')},
    { label: 'ظِلٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdae/%D8%B8%D9%90%D9%84%D9%92%D9%84%D9%8C.m4a ',image: require('../../../assets/images/shadow.webp')  },
];
const uniqueSoundForThdae = {
  label: 'ظ', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Thdae/%D8%B8%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'ظَ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdae/%D8%B8%D9%8E%D9%80%D8%A7.m4a '},
  { label: 'ظُ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdae/%D8%B8%D9%8F.m4a '},
  { label: 'ظِ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdae/%D8%B8%D9%90.m4a '}, 

]

const ThdaeScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ظ" soundFiles={soundFilesForThdae} uniqueSound={uniqueSoundForThdae} secondSoundFiles={secondSoundFiles}/>

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

export default ThdaeScreen;
