import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';



const SoundButton = ({ label, soundFile, fontSize =20, style }) => {
  // const playSound = async () => {
  //   const { sound } = await Audio.Sound.createAsync(soundFile);
  //   await sound.playAsync();
  // };

  const playSound = async () => {
    try {
      const soundObject = typeof soundFile === 'string' 
        ? { uri: soundFile } // Handle remote file
        : soundFile; // Handle local file (require)

      const { sound } = await Audio.Sound.createAsync(soundObject);
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return (
    <TouchableOpacity onPress={playSound} style={[styles.button, style]}
    // hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={[styles.buttonText, { fontSize }]} >{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
  },
});

export default SoundButton;