import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { HomeStyles as styles } from '../src/styles/HomeStyles';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
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
    </SafeAreaView>
  );
}