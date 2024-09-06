import React from 'react';
import LetterScreen from '../../components/LetterScreen';

const soundFilesForBaa = [
    { label: 'ب', file: require('../../assets/sounds/a.m4a') },
    { label: 'بَهْلَوَانٌ', file: require('../../assets/sounds/lion.m4a') },
    { label: 'بُرْتُقَالَةٌ', file: require('../../assets/sounds/goose.m4a') },
    { label: 'بِنْتٌ', file: require('@/assets/sounds/octopus.m4a')},
];

const BaaScreen = () => {
  return <LetterScreen letter="ب" soundFiles={soundFilesForBaa} />;
};

export default BaaScreen;
