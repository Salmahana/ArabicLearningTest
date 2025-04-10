import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForShin = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'شَمْسٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Shin/%D8%B4%D9%8E%D9%85%D9%92%D8%B3%D9%8C.m4a ', image: require('../../../assets/images/sun.webp') },
    { label: 'شُرْطِيٌ', file: ' https://f005.backblazeb2.com/file/Hurouf/Shin/%D8%B4%D9%8F%D9%88%D8%B1%D9%92%D8%B7%D9%90%D9%8A%D9%8C.m4a', image: require('../../../assets/images/police.webp')},
    { label: 'شِرَاعٌ', file: ' https://f005.backblazeb2.com/file/Hurouf/Shin/%D8%B4%D9%90%D8%B1%D9%8E%D8%A7%D8%B9%D9%8C.m4a',image: require('../../../assets/images/sail.webp')  },
];
const uniqueSoundForShin = {
  label: 'ش', 
  file: ' https://f005.backblazeb2.com/file/Hurouf/Shin/%D8%B4%D9%90%D9%8A%D9%86%D9%8C.m4a',
};

const secondSoundFiles = [
  { label:'شَـ',file: 'https://f005.backblazeb2.com/file/Hurouf/Shin/%D8%B4%D9%8E.m4a '},
  { label: 'شُـ',file: 'https://f005.backblazeb2.com/file/Hurouf/Shin/%D8%B4%D9%8F.m4a '},
  { label: 'شِـ', file: 'https://f005.backblazeb2.com/file/Hurouf/Shin/%D8%B4%D9%90.m4a '}, 

]

const ShinScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ش" soundFiles={soundFilesForShin} uniqueSound={uniqueSoundForShin} secondSoundFiles={secondSoundFiles}/>

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

export default ShinScreen;
