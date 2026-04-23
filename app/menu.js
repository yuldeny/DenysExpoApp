import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button
} from "react-native";
import { useQuery } from '@tanstack/react-query'; 

import { pizzaData } from "../data/pizzaData";
import { CardItem } from "../src/components/CardItem";
import { AppStyles as styles } from '../src/styles/AppStyles';
import { Ionicons } from '@expo/vector-icons';

const fetchPizzas = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pizzaData); 
    }, 1500);
  });
};

export default function MenuScreen() {
  const [search, setSearch] = useState("");

  const { 
    data: pizzas = [],
    isLoading, 
    isError, 
    error,
    refetch
  } = useQuery({
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
          Ой! Щось пішло не так: {error.message}
        </Text>
        <Button title="Спробувати ще раз" onPress={refetch} color="orange" />
      </View>
    );
  }

  const filteredPizza = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} />
      <View style={styles.container}>
        <Text style={styles.text}>IQ pizza</Text>

        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 16 }}><Ionicons name="search" size={18} color="black" /></Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setSearch(value)}
            value={search}
            placeholder="Пошук піци..."
          />
        </View>

        {search.length > 0 && (
          <View style={styles.searchResults}>
            {filteredPizza.map((pizza) => (
              <Text key={pizza.id} style={styles.searchItem}>
                {pizza.name}
              </Text>
            ))}
          </View>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <View style={styles.imgContainer}>
            {filteredPizza.map((pizza) => (
              <CardItem
                key={pizza.id}
                text={pizza.name}
                img={pizza.image}
                price={pizza.price}
                weight={pizza.weight}
                description={pizza.description}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>Зробити замовлення</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}