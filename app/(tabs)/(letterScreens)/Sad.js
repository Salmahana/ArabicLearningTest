import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForSad = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'صَارُوخٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Sad/%D8%B5%D9%8E%D8%A7%D8%B1%D9%8F%D9%88%D8%AE%D9%8C.m4a ', image: require('../../../assets/images/rocket.webp') },
    { label: 'صُنْدُوقٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Sad/%D8%B5%D9%8F%D9%86%D9%92%D8%AF%D9%8F%D9%88%D9%82%D9%8C.m4a ', image: require('../../../assets/images/box.webp')},
    { label: 'صِنَّارَةٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Sad/%D8%B5%D9%90%D9%86%D9%91%D9%8E%D8%A7%D8%B1%D9%8E%D8%A9%D9%8C.m4a ',image: require('../../../assets/images/fishing.webp')  },
];
const uniqueSoundForSad = {
  label: 'ص', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Sad/%D8%B5%D9%8E%D8%A7%D8%AF%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'صَـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Sad/%D8%B5%D9%8E.m4a '},
  { label: 'صُـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Sad/%D8%B5%D9%8F.m4a '},
  { label: 'صِـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Sad/%D8%B5%D9%90.m4a '}, 

]

const SadScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ص" soundFiles={soundFilesForSad} uniqueSound={uniqueSoundForSad} secondSoundFiles={secondSoundFiles}/>

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

export default SadScreen;
