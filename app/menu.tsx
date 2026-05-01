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
  SafeAreaView,
  Keyboard
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
  
  const clearSearch = () => {
    setSearch("");
    Keyboard.dismiss();
  };

  const [favorites, setFavorites] = useState<number[]>([]);
  
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

  const cleanSearchQuery = search.trim().toLocaleLowerCase();

  const filteredAndSortedPizzas = pizzas
    .filter((pizza) => pizza.name.toLocaleLowerCase().includes(cleanSearchQuery))
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
            style={[styles.input, { paddingHorizontal: 10, flex: 1 }]} 
            onChangeText={(value) => setSearch(value)}
            value={search}
            placeholder="Пошук..."
            placeholderTextColor="rgba(0, 0, 0, 0.4)" 
          />
          {search.length > 0 && (
            <TouchableOpacity 
              onPress={clearSearch}
              style={styles.clearButton} 
            >
              <Ionicons 
                name="close-circle" 
                size={16}
                color="orange"
              />
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {filteredAndSortedPizzas.length > 0 ? (
            <View style={styles.imgContainer}>
              {filteredAndSortedPizzas.map((pizza) => (
                <TouchableOpacity 
                  key={pizza.id}
                  activeOpacity={0.9}
                  onPress={() => router.push({
                    pathname: "/pizza/[id]",
                    params: { 
                      id: pizza.id,
                      name: pizza.name, 
                      price: pizza.price, 
                      image: pizza.image,
                      description: pizza.description
                    }
                  } as any)}
                >
                  <CardItem
                    text={pizza.name}
                    img={pizza.image}
                    price={pizza.price}
                    weight={pizza.weight}
                    description={pizza.description}
                    onAddToCart={() => addToCart(pizza)}
                    isFavorite={favorites.includes(pizza.id)}
                    onToggleFavorite={() => toggleFavorite(pizza.id)}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>
                Такої піци не існує 🍕
              </Text>
              <Text style={styles.emptySubtitle}>
                Спробуйте змінити пошуковий запит
              </Text>
            </View>
          )}
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