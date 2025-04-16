
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const LETTERS = [
  { key: 'alif', symbol: 'أ' },
  { key: 'ba', symbol: 'ب' },
  { key: 'ta', symbol: 'ت' },
  { key: 'tha', symbol: 'ث' },
  { key: 'jeem', symbol: 'ج' },
  { key: 'ha', symbol: 'ح' },
  { key: 'kha', symbol: 'خ' },
  { key: 'dal', symbol: 'د' },
  { key: 'thal', symbol: 'ذ' },
  { key: 'ra', symbol: 'ر' },
  { key: 'zay', symbol: 'ز' },
  { key: 'seen', symbol: 'س' },
  { key: 'sheen', symbol: 'ش' },
  { key: 'sad', symbol: 'ص' },
  { key: 'dad', symbol: 'ض' },
  { key: 'taa', symbol: 'ط' },
  { key: 'zaa', symbol: 'ظ' },
  { key: 'ain', symbol: 'ع' },
  { key: 'ghain', symbol: 'غ' },
  { key: 'fa', symbol: 'ف' },
  { key: 'qaf', symbol: 'ق' },
  { key: 'kaf', symbol: 'ك' },
  { key: 'lam', symbol: 'ل' },
  { key: 'meem', symbol: 'م' },
  { key: 'noon', symbol: 'ن' },
  { key: 'ha2', symbol: 'هـ' },
  { key: 'waw', symbol: 'و' },
  { key: 'ya', symbol: 'ي' },
];

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 4 - 16;

export default function WriteIndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>اختر حرفاً للتتبع ✍️</Text>
      <FlatList
        data={LETTERS}
        numColumns={4}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.letterBox}
            onPress={() => router.push(`/write/${item.key}`)}
          >
            <Text style={styles.letterText}>{item.symbol}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  grid: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  letterBox: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    margin: 8,
    borderRadius: 16,
    backgroundColor: '#fce4ec',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  letterText: {
    fontSize: 32,
    color: '#e91e63',
    fontWeight: 'bold',
  },
});
