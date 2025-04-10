import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForDal = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'دَرَّاجَةٌ', file:' https://f005.backblazeb2.com/file/Hurouf/Dal/%D8%AF%D9%8E%D8%B1%D9%91%D9%8E%D8%A7%D8%AC%D9%8E%D8%A9%D9%8C.m4a', image: require('../../../assets/images/bicycle.webp') },
    { label: 'دُبٌّ',  file :'https://f005.backblazeb2.com/file/Hurouf/Dal/%D8%AF%D9%8F%D8%A8%D9%92%D8%A8%D9%91%D9%8C(1).m4a' , image: require('../../../assets/images/bear.webp')},
    { label: 'دِيكٌ',  file :'https://f005.backblazeb2.com/file/Hurouf/Dal/%D8%AF%D9%90%D9%8A%D9%83%D9%8C.m4a ' ,image: require('../../../assets/images/rooster.webp')  },
];
const uniqueSoundForDal = {
  label: 'د', 
  file :'https://f005.backblazeb2.com/file/Hurouf/Dal/%D8%AF%D9%8E%D8%A7%D9%84%D9%8C.m4a ' ,
};

const secondSoundFiles = [
  { label:'دَ',  file :'https://f005.backblazeb2.com/file/Hurouf/Dal/%D9%80%D8%AF%D9%8E.m4a' },
  { label: 'دُ',  file :'https://f005.backblazeb2.com/file/Hurouf/Dal/%D9%80%D8%AF%D9%8F.m4a' },
  { label: 'دِ',  file :'https://f005.backblazeb2.com/file/Hurouf/Dal/%D9%80%D8%AF%D9%90.m4a' }, 

]

const DalScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="د" soundFiles={soundFilesForDal} uniqueSound={uniqueSoundForDal} secondSoundFiles={secondSoundFiles}/>

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

export default DalScreen;
