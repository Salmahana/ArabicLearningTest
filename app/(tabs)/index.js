// app/index.js
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>إختر حرفا:</Text>
      <View style={styles.lettersContainer}>
        {[
          'أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش',
          'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'كـ', 'ل', 'م', 'ن', 'هـ', 'و', 'ي',
        ].map((letter) => (
          <Pressable
            key={letter}
            onPress={() => router.push(`/${letter}`)}
            style={styles.bubble}
          >
            <Text style={styles.harf}>{letter}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16 ,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingBottom: 80
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  lettersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  bubble: {
    width: 80,
    height: 80,
    backgroundColor: '#E0F7FA',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    elevation: 4, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  harf: {
    fontSize: 30,
    color: '#00796B',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;