import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForThdal = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ذَهَبٌ', file: ' https://f005.backblazeb2.com/file/Hurouf/Thdal/%D8%B0%D9%8E%D9%87%D9%8E%D8%A8%D9%8C.m4a',  image: require('../../../assets/images/Gold.webp') },
    { label: 'ذُرَةٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdal/%D8%B0%D9%8F%D8%B1%D9%8E%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/corn.webp')},
    { label: 'ذِئْبٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdal/%D8%B0%D9%90%D8%A6%D9%92%D8%A8%D9%8C.m4a ',image: require('../../../assets/images/wolf.webp')  },
];
const uniqueSoundForThdal = {
  label: 'ذ', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Thdal/%D8%B0%D9%8E%D8%A7%D9%84%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'ذَ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdal/%D9%80%D8%B0%D9%8E%D9%80.m4a '},
  { label: 'ذُ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdal/%D9%80%D8%B0%D9%8F%D9%80.m4a '},
  { label: 'ذِ', file: 'https://f005.backblazeb2.com/file/Hurouf/Thdal/%D9%80%D8%B0%D9%90%D9%80.m4a '}, 

]

const ThdalScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ذ" soundFiles={soundFilesForThdal} uniqueSound={uniqueSoundForThdal} secondSoundFiles={secondSoundFiles}/>

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

export default ThdalScreen;
