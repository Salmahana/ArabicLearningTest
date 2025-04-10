import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForTta = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'طَمَاطِمٌ', file: 'https://f005.backblazeb2.com/file/Hurouf/Tta/%D8%B7%D9%8E%D9%85%D9%8E%D8%A7%D8%B7%D9%90%D9%85%D9%8C.m4a ', image: require('../../../assets/images/tomatoes.webp') },
    { label: 'طُيُورٌ',  file: 'https://f005.backblazeb2.com/file/Hurouf/Tta/%D8%B7%D9%8F%D9%8A%D9%8F%D9%88%D8%B1%D9%8C.m4a ', image: require('../../../assets/images/birds.webp')},
    { label: 'طِفْلٌ',  file: 'https://f005.backblazeb2.com/file/Hurouf/Tta/%D8%B7%D9%90%D9%81%D9%92%D9%84%D9%8C.m4a ',image: require('../../../assets/images/boy.png')  },
];
const uniqueSoundForTta = {
  label: 'ط', 
  file: 'https://f005.backblazeb2.com/file/Hurouf/Tta/%D8%B7%D9%8E%D8%A7%D8%A1%D9%8C.m4a ',
};

const secondSoundFiles = [
  { label:'طَ', file: 'https://f005.backblazeb2.com/file/Hurouf/Tta/%D8%B7%D9%8E.m4a '},
  { label: 'طُ',  file: 'https://f005.backblazeb2.com/file/Hurouf/Tta/%D8%B7%D9%8F.m4a '},
  { label: 'طِ',  file: 'https://f005.backblazeb2.com/file/Hurouf/Tta/%D8%B7%D9%90.m4a '}, 

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
