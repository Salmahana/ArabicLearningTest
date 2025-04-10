import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForYa = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'يَدٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ya/%D9%8A%D9%8E%D8%AF%D9%8C.m4a ', image: require('../../../assets/images/hand.webp') },
    { label: 'يُصَلِّي', file:'https://f005.backblazeb2.com/file/Hurouf/Ya/%D9%8A%D9%8F%D8%B5%D9%8E%D9%84%D9%91%D9%90%D9%8A.m4a ', image: require('../../../assets/images/praying.webp')},
    { label: 'كُتَيِّبٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ya/%D9%83%D9%8F%D8%AA%D9%8E%D9%8A%D9%91%D9%90%D8%A8%D9%8C.m4a ',image: require('../../../assets/images/Booklet.png')  },
];
const uniqueSoundForYa = {
  label: 'ي', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Ya/%D9%8A%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'يـَ', file:'https://f005.backblazeb2.com/file/Hurouf/Ya/%D9%8A%D9%8E.m4a '},
  { label: 'يُـ', file:'https://f005.backblazeb2.com/file/Hurouf/Ya/%D9%8A%D9%8F.m4a '},
  { label: 'ـيـِّ', file:'https://f005.backblazeb2.com/file/Hurouf/Ya/%D9%8A%D9%91%D9%90.m4a'}, 

]

const YaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ي" soundFiles={soundFilesForYa} uniqueSound={uniqueSoundForYa} secondSoundFiles={secondSoundFiles}/>

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

export default YaScreen;
