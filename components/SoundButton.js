import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

const SoundButton = ({ label, soundFile }) => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
  };

  return (
    <TouchableOpacity onPress={playSound} style={styles.button}>
      <Text style = {styles.textWithFrame}>{label}</Text>
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
    padding: 5, // space between the text and the border
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5, // for rounded corners (optional)
    fontSize: 30,
    color: '#333',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
};

export default SoundButton;