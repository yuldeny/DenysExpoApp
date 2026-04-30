import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
  SafeAreaView
} from "react-native";
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { Pizza } from "../data/pizzaData";
import { CardItem } from "../src/components/CardItem";
import { AppStyles as styles } from '../src/styles/AppStyles';
import { PIZZAS_URL } from "../src/api";
import { useCart } from "../src/context/CartContext";

const fetchPizzas = async (): Promise<Pizza[]> => {
  const response = await fetch(PIZZAS_URL);
  if (!response.ok) {
    throw new Error('Не вдалося завантажити меню з сервера');
  }
  return await response.json();
};

export default function MenuScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  
  // --- НАША НОВАЯ ПАМЯТЬ ДЛЯ СЕРДЕЧЕК ---
  const [favorites, setFavorites] = useState<number[]>([]);

  // Функция, которая добавляет или удаляет ID пиццы из избранного
  const toggleFavorite = (pizzaId: number) => {
    setFavorites((prev) =>
      prev.includes(pizzaId)
        ? prev.filter((id) => id !== pizzaId)
        : [...prev, pizzaId]
    );
  };
  
  const { cart, addToCart, totalSum } = useCart();

  const {
    data: pizzas = [],
    isLoading,
    isError,
    error,
    refetch
  } = useQuery<Pizza[], Error>({
    queryKey: ['pizzaMenu'],
    queryFn: fetchPizzas,
  });

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="orange" />
        <Text style={{ marginTop: 10 }}>Випікаємо меню...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
        <Ionicons name="warning-outline" size={50} color="red" />
        <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 15 }}>
          Помилка: {error.message}
        </Text>
        <Button title="Спробувати ще раз" onPress={() => refetch()} color="orange" />
      </View>
    );
  }

  // --- НОВАЯ СОРТИРОВКА (ИЗБРАННОЕ ВВЕРХ) ---
  const filteredAndSortedPizzas = pizzas
    .filter((pizza) => pizza.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    .sort((a, b) => {
      const isAFav = favorites.includes(a.id);
      const isBFav = favorites.includes(b.id);
      if (isAFav && !isBFav) return -1;
      if (!isAFav && isBFav) return 1;
      return 0;
    });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} />
      <View style={styles.container}>
        <Text style={styles.text}>IQ pizza</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="search" size={18} color="black" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.input}
            onChangeText={(value) => setSearch(value)}
            value={search}
            placeholder="Пошук..."
            placeholderTextColor="rgba(0, 0, 0, 0.4)" 
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View style={styles.imgContainer}>
            {/* Используем наш новый отсортированный массив */}
            {filteredAndSortedPizzas.map((pizza) => (
              <CardItem
                key={pizza.id}
                text={pizza.name}
                img={pizza.image}
                price={pizza.price}
                weight={pizza.weight}
                description={pizza.description}
                onAddToCart={() => addToCart(pizza)}
                // --- ПЕРЕДАЕМ ДАННЫЕ В КАРТОЧКУ ---
                isFavorite={favorites.includes(pizza.id)}
                onToggleFavorite={() => toggleFavorite(pizza.id)}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      {cart.length > 0 && (
        <TouchableOpacity 
          style={styles.orderBtn}
          onPress={() => router.push('/cart' as any)}
        >
          <Text style={styles.orderBtnText}>
            В корзині {cart.length} шт. на {totalSum} грн
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}