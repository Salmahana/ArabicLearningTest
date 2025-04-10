import React from 'react';
import LetterScreen from '../../../components/LetterScreen';

const soundFilesForBaa = [
    
    { label: 'بَهْلَوَانٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ba/%D8%A8%D9%8E%D9%87%D9%92%D9%84%D9%8E%D9%88%D9%8E%D8%A7%D9%86%D9%8C.m4a', image: require('../../../assets/images/clown.webp') },
    { label: 'بُرْتُقَالَةٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ba/%D8%A8%D9%8F%D8%B1%D9%92%D8%AA%D9%8F%D9%82%D9%8E%D8%A7%D9%84%D9%8E%D8%A9%D9%8C.m4a', image: require('../../../assets/images/orange.webp') },
    { label: 'بِنْتٌ', file:'https://f005.backblazeb2.com/file/Hurouf/Ba/%D8%A8%D9%90%D9%86%D9%92%D8%AA%D9%8C.m4a', image: require('../../../assets/images/girl.jpg')},
];
const uniqueSoundForBaa = {

label: 'ب', file:'https://f005.backblazeb2.com/file/Hurouf/Ba/%D8%A8%D9%8E%D8%A7%D8%A1%D9%8C.m4a' 
};

const secondSoundFiles = [
  { label:'بَ', file:'https://f005.backblazeb2.com/file/Hurouf/Ba/%D8%A8%D9%8Esamira.m4a'},
  { label: 'بُ', file:'https://f005.backblazeb2.com/file/Hurouf/Ba/%D8%A8%D9%8F%D9%88.m4a'},
  { label: 'بِ', file:'https://f005.backblazeb2.com/file/Hurouf/Ba/%D8%A8%D9%90samira.m4a'}, 

]


const BaaScreen = () => {
  return <LetterScreen letter="ب" soundFiles={soundFilesForBaa}uniqueSound={uniqueSoundForBaa} secondSoundFiles={secondSoundFiles}/>;
};

export default BaaScreen;
