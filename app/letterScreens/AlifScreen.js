// letterScreens/AlifScreen.js
import React from 'react';
import LetterScreen from '../../components/LetterScreen';

const soundFilesForAlif = [
    { label: 'أ', file: require('../../assets/sounds/a.m4a') },
    { label: 'أَسَدٌ', file: require('../../assets/sounds/lion.m4a') },
    { label: 'إِوَزَّةٌ', file: require('../../assets/sounds/goose.m4a') },
    { label: 'أُخْطُبُوط', file: require('@/assets/sounds/octopus.m4a')},
];

const AlifScreen = () => {
  return <LetterScreen letter="أ" soundFiles={soundFilesForAlif} />;
};

export default AlifScreen;
