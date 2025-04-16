// write/[letter].js
import { useLocalSearchParams } from 'expo-router';
import TraceLetterScreen from './TraceLetterScreen';

export default function LetterTracingRoute() {
  const { letter } = useLocalSearchParams();

  return <TraceLetterScreen letter={letter} />;
}
