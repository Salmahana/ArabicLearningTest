// LetterScreen.js
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import SoundButton from './SoundButton';
import { Audio } from 'expo-av';

const LetterScreen = ({ letter, soundFiles, uniqueSound, secondSoundFiles }) => {
  const playSound = async (soundFile) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      {/* Main Letter in Circle */}
      {uniqueSound && (
        <View style={styles.border}>
          <SoundButton
            label={uniqueSound.label}
            soundFile={uniqueSound.file}
            fontSize={180}
          />
        </View>
      )}

      {/* Grid Layout for Buttons */}
      <View style={styles.gridContainer}>
        {/* Left Outer Column */}
        <View style={styles.outerColumn}>
          {soundFiles.map((sound, index) => (
            <View style={styles.soundButton} key={index}>
              <SoundButton
                label={sound.label}
                soundFile={sound.file}
                fontSize={30}
              />
            </View>
          ))}
        </View>

        {/* Inner Column 1 */}
        <View style={styles.column}>
          {secondSoundFiles.map((sound, index) => (
            <View style={styles.soundButton} key={index}>
              <SoundButton
                label={sound.label}
                soundFile={sound.file}
                fontSize={30}
              />
            </View>
          ))}
        </View>

        {/* Inner Column 2 */}
        <View style={styles.column}>
          {secondSoundFiles.map((sound, index) => (
            <View style={styles.soundButton} key={index}>
              <SoundButton
                label={sound.label}
                soundFile={sound.file}
                fontSize={30}
              />
            </View>
          ))}
        </View>

        {/* Right Outer Column */}
        <View style={styles.outerColumn}>
          {soundFiles.map((sound, index) => (
            <View style={styles.soundButton} key={index}>
              <SoundButton
                label={sound.label}
                soundFile={sound.file}
                fontSize={30}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Images with Text Section */}
      {/* Images with Text Section */}
      <View style={styles.imageGrid}>
        {soundFiles.map((sound, index) => (
          <Pressable
            style={styles.imageWrapper}
            key={index}
            onPress={() => playSound(sound.file)}
          >
            <View style={styles.imageCircle}>
              <Image source={sound.image} style={styles.image} />
            </View>
            <Text style={styles.imageText}>{sound.label}</Text>
          </Pressable>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f9f9f9',
  },
  border: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 12,
    borderColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  column: {
    flex: 1.5, // Default size for inner columns
    alignItems: 'center',
    gap: 8,
  },
  outerColumn: {
    flex: 3, // Make outer columns larger
    alignItems: 'center',
    gap: 8,
  },
  soundButton: {
    width: '90%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 8,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    width: '90%',
  },
  imageWrapper: {
    alignItems: 'center', // Centers the image and text
    margin: 8,
  },
   imageCircle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
    overflow: 'hidden', // Ensures the image doesn't spill outside the circle
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
  },
  imageText: {
    marginTop: 8,
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LetterScreen;
