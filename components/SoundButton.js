import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

const SoundButton = ({ label, soundFile, fontSize =20}) => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
  };

  return (
    <TouchableOpacity onPress={playSound}
    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={[styles.buttonText, { fontSize }]} >{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    margin: 5,
  },
  textWithFrame: {
    padding: 10, // space between the text and the border
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5, // for rounded corners (optional)
    fontSize: 30,
    color: '#333',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
  },
};

export default SoundButton;