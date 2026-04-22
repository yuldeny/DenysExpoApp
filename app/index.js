import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { HomeStyles as styles } from '../src/styles/HomeStyles';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ласкаво просимо до IQ Pizza!</Text>
      <Text style={styles.subtitle}>Найсмачніша піца у твоєму телефоні 🍕</Text>

      <TouchableOpacity 
        style={styles.btn}
        onPress={() => router.push('/menu')}
      >
        <Text style={styles.btnText}>Перейти до меню</Text>
      </TouchableOpacity>
    </View>
  );
}
