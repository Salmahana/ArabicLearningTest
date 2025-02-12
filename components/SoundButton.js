import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const SoundButton = ({ label, soundFile, fontSize =20, style }) => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
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
    // padding: 10,
    // backgroundColor: '#ccc',
    // borderRadius: 5,
    // margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // textWithFrame: {
  //   padding: 10, // space between the text and the border
  //   borderWidth: 1,
  //   borderColor: '#007AFF',
  //   borderRadius: 5, // for rounded corners (optional)
  //   fontSize: 30,
  //   color: '#333',
  //   backgroundColor: '#fff',
  //   textAlign: 'center',
  // },
  buttonText: {
    color: '#333',
    textAlign: 'center',
  },
});

export default SoundButton;