import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForKaf = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'كَلْبٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Kaf/%D9%83%D9%8E%D9%84%D9%92%D8%A8%D9%8C.m4a ', image: require('../../../assets/images/dog.webp') },
    { label: 'كُرَةٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Kaf/%D9%83%D9%8F%D8%B1%D9%8E%D8%A9%D9%8C.m4a ', image: require('../../../assets/images/ball.webp')},
    { label: 'كِتَابٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Kaf/%D9%83%D9%90%D8%AA%D9%8E%D8%A7%D8%A8%D9%8C.m4a ',image: require('../../../assets/images/book.webp')  },
];
const uniqueSoundForKaf = {
  label: 'كـ', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Kaf/%D9%83%D9%8E%D8%A7%D9%81%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'كَـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Kaf/%D9%83%D9%8E%D8%A7.m4a '},
  { label: 'كُـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Kaf/%D9%83%D9%8F%D9%88.m4a '},
  { label: 'كِـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Kaf/%D9%83%D9%90%D9%8A.m4a '}, 

]

const KafScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="كـ" soundFiles={soundFilesForKaf} uniqueSound={uniqueSoundForKaf} secondSoundFiles={secondSoundFiles}/>

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

export default KafScreen;
