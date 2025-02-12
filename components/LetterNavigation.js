import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const LetterNavigation = ({ currentLetterIndex, totalLetters }) => {
  const router = useRouter();

  const handlePrevious = () => {
    if (currentLetterIndex > 0) {
      router.push(`/letter/${currentLetterIndex - 1}`);
    }
  };

  const handleNext = () => {
    if (currentLetterIndex < totalLetters - 1) {
      router.push(`/letter/${currentLetterIndex + 1}`);
    }
  };

  const handleReload = () => {
    // Reload current screen
    router.replace(`/letter/${currentLetterIndex}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePrevious} disabled={currentLetterIndex === 0}>
        <Text style={styles.text}>◀ Previous</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reloadButton} onPress={handleReload}>
        <Text style={styles.reloadText}>🔄</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNext} disabled={currentLetterIndex === totalLetters - 1}>
        <Text style={styles.text}>Next ▶</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F9A825', // Match the color in the uploaded image
  },
  button: {
    backgroundColor: '#FFB300',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3, // Shadow for Android
  },
  reloadButton: {
    backgroundColor: '#FFB300',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reloadText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default LetterNavigation;
