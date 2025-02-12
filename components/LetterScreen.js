// LetterScreen.js
import React from 'react';
import {SafeAreaView, View, Text, Image, Pressable, StyleSheet , Dimensions} from 'react-native';
import SoundButton from './SoundButton';
import { Audio } from 'expo-av';
import { Stack , useLocalSearchParams } from 'expo-router';
import LetterNavigation from './LetterNavigation';
import { } from 'expo-router/build/hooks';
  
const { width, height } = Dimensions.get('window'); // Get screen dimensions
const LetterScreen = ({ letter, soundFiles, uniqueSound, secondSoundFiles , route }) => {
  const playSound = async (soundFile) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
  };
  const index = useLocalSearchParams();
  const currentLetterIndex = parseInt(index, 10) || 0;
  const totalLetters = 28; // Total Arabic letters


  return (
    <SafeAreaView style={styles.container}>
       <Stack.Screen options={{title : 'حرف ' + uniqueSound.label ,headerTitleAlign:'center'}} />
      {/* Main Letter in Circle */}
      {uniqueSound && (
        <View style={styles.border}>
          <SoundButton
            label={uniqueSound.label}
            soundFile={uniqueSound.file}
            fontSize={width * 0.4}
            
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
      <View style={styles.imageGrid}>
        {soundFiles.map((sound, index) => (
          <Pressable
            style={styles.imageWrapper}
            key={index}
            onPress={() => playSound(sound.file)}
          >
            {/* <View style={styles.imageCircle }>
              <Image source={sound.image} style={styles.image} />
            </View> */}

<View style={[styles.imageCircle, { width: width * 0.25, height: width * 0.25 }]}>
  <Image
    source={sound.image}
    style={[
      styles.image,
      { width: width * 0.25, height: width * 0.25 },
    ]}
  />
</View>
            <Text style={styles.imageText}>{sound.label}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#f9f9f9',
  },
  border: {
    // width: 280,
    // height: 280,
    // borderRadius: 140,
    width: width * 0.6, // Dynamically scale size
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
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
    // marginVertical: 20,
    marginVertical: height * 0.02,
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
    justifyContent: 'space-between',
    marginVertical: height * 0.02 ,
    width: '90%',
  },
  imageWrapper: {
    alignItems: 'center', // Centers the image and text
    margin: 8,
  },
   imageCircle: {
    // width: 100,
    // height: 100,
    // borderRadius: 50, // Makes the image circular
    borderRadius: (width * 0.25) / 2, // Circular with dynamic size
    overflow: 'hidden', // Ensures the image doesn't spill outside the circle
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // width: '100%',
    // height: "100%",
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
