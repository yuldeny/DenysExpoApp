import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CartStyles as styles } from '../src/styles/CartStyles';
import { CartItem } from '../src/components/CartItem';
import { useCart } from '../src/context/CartContext';

export default function CartScreen() {
  const router = useRouter();
  const { cart, removeFromCart, totalSum } = useCart();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Моє замовлення</Text>

        {cart.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Корзина порожня</Text>
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((pizza, index) => (
              <CartItem
                key={`${pizza.id}-${index}`}
                text={pizza.name}
                img={pizza.image}
                price={pizza.price}
                onRemove={() => removeFromCart(pizza.id)}
              />
            ))}
          </ScrollView>
        )}
      </View>

      {cart.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Разом:</Text>
            <Text style={styles.totalAmount}>{totalSum} ₴</Text>
          </View>

          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnText}>Оформити замовлення</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}