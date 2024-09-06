// app/index.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Select a letter:</Text>
      {['أ', 'ب', /* other letters */].map((letter) => (
        <TouchableOpacity key={letter} onPress={() => router.push(`/${letter}`)}>
          <Text  style={styles.harf}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = {
  harf: {
    fontSize: 180,
    color: '#333',
    textAlign: 'center',
  },
};

export default Home;
