import { View, Text, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { adminStyles as styles } from '../src/styles/AdminStyles';
import { PIZZAS_URL } from '../src/api';

export default function AdminScreen() {
  const queryClient = useQueryClient();

  const { data: pizzas = [] } = useQuery({
    queryKey: ['pizzaMenu'],
    queryFn: async () => {
      const response = await fetch(PIZZAS_URL);
      return response.json();
    }
  });

  const addPizzaMutation = useMutation({
    mutationFn: async (newPizza: any) => {
      const response = await fetch(PIZZAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPizza),
      });
      if (!response.ok) throw new Error('Помилка');
      return response.json();
    },
    onSuccess: () => {
      Alert.alert('Успіх!', 'Піцу додано!');
      queryClient.invalidateQueries({ queryKey: ['pizzaMenu'] });
    }
  });

  const deletePizzaMutation = useMutation({
    mutationFn: async (pizzaId: number) => {
      const response = await fetch(`${PIZZAS_URL}/${pizzaId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Помилка');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pizzaMenu'] });
    }
  });

  const updatePizzaMutation = useMutation({
    mutationFn: async (updatedPizza: any) => {
      const response = await fetch(`${PIZZAS_URL}/${updatedPizza.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPizza),
      });
      if (!response.ok) throw new Error('Помилка');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pizzaMenu'] });
    }
  });

  const handleAddTestPizza = () => {
    const fakePizza = {
      id: Date.now(),
      name: "Піца від Адміна 🍕",
      price: 250,
      weight: "600 g",
      description: "Цю піцу щойно створив наш Python бекенд!",
      image: "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F36113%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    };
    addPizzaMutation.mutate(fakePizza);
  };

  const handleQuickUpdate = (pizza: any) => {
    const changedPizza = {
      ...pizza,
      price: pizza.price + 10,
      name: pizza.name.includes("(Оновлено)") ? pizza.name : pizza.name + " (Оновлено)"
    };
    updatePizzaMutation.mutate(changedPizza);
  };

  const handleDiscount = (pizza: any) => {
    const changedPizza = {
      ...pizza,
      price: Math.max(0, pizza.price - 10),
      name: pizza.name.includes("(Знижка)") ? pizza.name : pizza.name + " (Знижка)"
    };
    updatePizzaMutation.mutate(changedPizza);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.pageTitle}>Панель Адміністратора</Text>

      <Button
        title="Додати тестову піцу"
        onPress={handleAddTestPizza}
        color="orange"
      />

      <Text style={styles.sectionTitle}>Список товарів:</Text>

      {pizzas.map((pizza: any) => (
        <View key={pizza.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.pizzaName}>
              {pizza.name} - {pizza.price} грн
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => handleDiscount(pizza)}
              style={styles.btnDiscount}
            >
              <Text style={styles.btnTextWhite}>-10 грн</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleQuickUpdate(pizza)}
              style={styles.btnUpdate}
            >
              <Text style={styles.btnTextBlack}>+10 грн</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => deletePizzaMutation.mutate(pizza.id)}
              style={styles.btnDelete}
            >
              <Text style={styles.btnTextWhite}>Видалити</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}