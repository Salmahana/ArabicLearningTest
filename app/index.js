import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MenuButton
        icon="book-outline"
        label="أتعلم الحروف"
        onPress={() => router.push('/learn')}
      />
      <MenuButton
        icon="create-outline"
        label="أكتب الحروف"
        onPress={() => router.push('/write')}
      />
      <MenuButton
        icon="mic-outline"
        label="أنطق الحروف"
        onPress={() => router.push('/pronounce')}
      />
      <MenuButton
        icon="school-outline"
        label="الإختبارات"
        onPress={() => router.push('/quizzes')}
      />
      {/* 🧪 Skia Test Button – Dev Only */}
    {__DEV__ && (
      <MenuButton
        icon="color-wand-outline"
        label="🧪 Skia Test"
        onPress={() => router.push('/skiaTest')}
      />
    )}



    </View>
  );
}

// Reusable menu-style button
function MenuButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#00796B" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#E0F7FA',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'NotoNaskhArabic', // optional if you use custom Arabic font
    color: '#333',
  },
});
