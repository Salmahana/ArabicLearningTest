import React from 'react';
import LetterScreen from '../../../components/LetterScreen';
import SoundButton from '../../../components/SoundButton';
import { View, Text } from 'react-native';

const soundFilesForTha = [
    // { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'ثَعْلَبٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Tha/%D8%AB%D9%8E%D8%B9%D9%92%D9%84%D9%8E%D8%A8%D9%8C(2).m4a', image: require('../../../assets/images/fox.webp') },
    { label: 'ثُعْبَانٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Tha/%D8%AB%D9%8F%D8%B9%D9%92%D8%A8%D9%8E%D8%A2%D9%86%D9%8C.m4a', image: require('../../../assets/images/snake.webp')},
    { label: 'ثِيَابٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Tha/%D8%AB%D9%90%D9%8A%D9%8E%D8%A7%D8%A8%D9%8C(1).m4a',image: require('../../../assets/images/clothing.jpg')  },
];
const uniqueSoundForTha = {
  label: 'ث', 
  file:'https://f005.backblazeb2.com/file/Hurouf/Tha/%D8%AB%D9%8E%D8%A7%D8%A1%D9%8C(1).m4a',
};

const secondSoundFiles = [
  { label:'ثَ', file:'https://f005.backblazeb2.com/file/Hurouf/Tha/%D8%AB%D9%8E.m4a'},
  { label: 'ثُ', file:'https://f005.backblazeb2.com/file/Hurouf/Tha/%D8%AB%D9%8F.m4a'},
  { label: 'ثِ', file:'https://f005.backblazeb2.com/file/Hurouf/Tha/%D8%AB%D9%90.m4a'}, 

]

const ThaScreen = () => {
  return(
    <View style={styles.container} >
   <LetterScreen letter="ث" soundFiles={soundFilesForTha} uniqueSound={uniqueSoundForTha} secondSoundFiles={secondSoundFiles}/>

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

export default ThaScreen;
