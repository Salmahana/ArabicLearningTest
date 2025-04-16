///app/(tabs)/(letterScreens)/_layout.js

import { Drawer } from 'expo-router/drawer';
import { Text, View, StyleSheet } from 'react-native';

export const unstable_settings = {
  drawer: null,
};

const letterList = [
  { letter: 'أ', name: 'Alif' },
  { letter: 'ب', name: 'Ba' },
  { letter: 'ت', name: 'Ta' },
  { letter: 'ث', name: 'Tha' },
  { letter: 'ج', name: 'Jim' },
  { letter: 'ح', name: 'Ha' },
  { letter: 'خ', name: 'Kha' },
  { letter: 'د', name: 'Dal' },
  { letter: 'ذ', name: 'Thdal' },
  { letter: 'ر', name: 'Ra' },
  { letter: 'ز', name: 'Zay' },
  { letter: 'س', name: 'Sin' },
  { letter: 'ش', name: 'Shin' },
  { letter: 'ص', name: 'Sad' },
  { letter: 'ض', name: 'Dad' },
  { letter: 'ط', name: 'Tta' },
  { letter: 'ظ', name: 'Thdae' },
  { letter: 'ع', name: 'Ain' },
  { letter: 'غ', name: 'Ghain' },
  { letter: 'ف', name: 'Fa' },
  { letter: 'ق', name: 'Qaf' },
  { letter: 'كـ', name: 'Kaf' },
  { letter: 'ل', name: 'Lam' },
  { letter: 'م', name: 'Mim' },
  { letter: 'ن', name: 'Nun' },
  { letter: 'هـ', name: 'Hha' },
  { letter: 'و', name: 'Waw' },
  { letter: 'ي', name: 'Ya' },
];

export default function LetterLayout() {
  return (
    <Drawer >
      {letterList.map(({ letter, name }) => (
        <Drawer.Screen
          key={name}
          name={name} // Matches the letter screen file (e.g., "Alif" for Alif.js)
          options={{
            drawerLabel: () => (
              <View style={styles.circle}>
                <Text style={styles.letter}>{letter}</Text>
              </View>
            ),
          }}
        />
      ))}
    </Drawer>
  );
}

// ✅ Styles for Circular Design
const styles = StyleSheet.create({
  circle: {
    width: 70, // Diameter of the circle
    height: 50, // Diameter of the circle
    borderRadius: 25, // Makes the container circular
    backgroundColor: '#E0F7FA', // Light blue background
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5, // Space between items
  },
  letter: {
    fontSize: 30, // Matches your home page style
    fontWeight: 'bold',
    color: '#00796B', // Dark teal color for Arabic letters
    fontFamily: 'NotoNaskhArabic', // Use your font if applicable
    textAlign: 'center',
  },
});
