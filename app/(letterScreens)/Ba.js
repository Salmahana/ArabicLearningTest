import React from 'react';
import LetterScreen from '../../components/LetterScreen';

const soundFilesForBaa = [
    
    { label: 'بَهْلَوَانٌ', file: require('../../assets/sounds/clown.m4a'), image: require('../../assets/images/clown.webp') },
    { label: 'بُرْتُقَالَةٌ', file: require('../../assets/sounds/orange.m4a'), image: require('../../assets/images/orange.webp') },
    { label: 'بِنْتٌ', file: require('@/assets/sounds/girl.m4a'), image: require('../../assets/images/girl.jpg')},
];
const uniqueSoundForBaa = {

label: 'ب', file: require('../../assets/sounds/Bae.m4a') 
};

const secondSoundFiles = [
  { label:'بَ', file: require('../../assets/sounds/ba.m4a')},
  { label: 'بُ', file: require('../../assets/sounds/bo.m4a')},
  { label: 'بِ', file: require('../../assets/sounds/be.m4a')}, 

]


const BaaScreen = () => {
  return <LetterScreen letter="ب" soundFiles={soundFilesForBaa}uniqueSound={uniqueSoundForBaa} secondSoundFiles={secondSoundFiles}/>;
};

export default BaaScreen;
