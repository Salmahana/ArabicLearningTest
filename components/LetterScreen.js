// LetterScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import SoundButton from './SoundButton';

const LetterScreen = ({ letter, soundFiles }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.letter}>{letter}</Text>
      {soundFiles.map((sound, index) => (
        <SoundButton key={index} label={sound.label} soundFile={sound.file} />
      ))}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontSize: 52,
    marginBottom: 20,
  },
};

export default LetterScreen;