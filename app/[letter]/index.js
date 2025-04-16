import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import React, { Suspense } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

export const unstable_settings = {
  drawer: null,
};

// Mapping Arabic letters to their corresponding screen components
const letterToScreenMap = {
  'أ': require('../(tabs)/(letterScreens)/Alif').default,
  'ب': require('../(tabs)/(letterScreens)/Ba').default,
  'ت': require('../(tabs)/(letterScreens)/Ta').default,
  'ث': require('../(tabs)/(letterScreens)/Tha').default,
  'ج': require('../(tabs)/(letterScreens)/Jim').default,
  'ح': require('../(tabs)/(letterScreens)/Ha').default,
  'خ': require('../(tabs)/(letterScreens)/Kha').default,
  'د': require('../(tabs)/(letterScreens)/Dal').default,
  'ذ': require('../(tabs)/(letterScreens)/Thdal').default,
  'ر': require('../(tabs)/(letterScreens)/Ra').default,
  'ز': require('../(tabs)/(letterScreens)/Zay').default,
  'س': require('../(tabs)/(letterScreens)/Sin').default,
  'ش': require('../(tabs)/(letterScreens)/Shin').default,
  'ص': require('../(tabs)/(letterScreens)/Sad').default,
  'ض': require('../(tabs)/(letterScreens)/Dad').default,
  'ط': require('../(tabs)/(letterScreens)/Tta').default,
  'ظ': require('../(tabs)/(letterScreens)/Thdae').default,
  'ع': require('../(tabs)/(letterScreens)/Ain').default,
  'غ': require('../(tabs)/(letterScreens)/Ghain').default,
  'ف': require('../(tabs)/(letterScreens)/Fa').default,
  'ق': require('../(tabs)/(letterScreens)/Qaf').default,
  'كـ': require('../(tabs)/(letterScreens)/Kaf').default,
  'ل': require('../(tabs)/(letterScreens)/Lam').default,
  'م': require('../(tabs)/(letterScreens)/Mim').default,
  'ن': require('../(tabs)/(letterScreens)/Nun').default,
  'هـ': require('../(tabs)/(letterScreens)/Hha').default,
  'و': require('../(tabs)/(letterScreens)/Waw').default,
  'ي': require('../(tabs)/(letterScreens)/Ya').default,
};

// Get all letters in an array
const letterList = Object.keys(letterToScreenMap);

const LetterRoute = () => {
  const { letter } = useLocalSearchParams(); // Get the letter parameter from the route
  const router = useRouter();

  const LetterComponent = letterToScreenMap[letter] || null; // Get the screen component based on the letter
  const currentIndex = letterList.indexOf(letter); // Get the index of the current letter

  // Show an error message if the letter is invalid
  if (!LetterComponent) {
    return <Text style={styles.errorText}>Invalid letter</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      {/* Letter Screen */}
      <View style={{ flex: 1 }}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <LetterComponent />
        </Suspense>
      </View>

    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  disabledButton: {
    backgroundColor: '#ccc',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default LetterRoute;
