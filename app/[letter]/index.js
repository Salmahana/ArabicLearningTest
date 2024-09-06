// app/[letter]/index.js
import { Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import AlifScreen from '../letterScreens/AlifScreen';
import BaaScreen from '../letterScreens/BaaScreen';
// Import other letter screens...

const LetterRoute = () => {
  const { letter } =  useLocalSearchParams();
  console.log(letter); // Check the exact letter being passed

  const screens = {
    "أ" : <AlifScreen />,
  'ب': <BaaScreen />,
    // Map other letters...
  };

  // Default fallback if the letter is not recognized
  if (!screens[letter]) {
    return <Text>Invalid letter</Text>;
  }

  return screens[letter];

};

export default LetterRoute;
