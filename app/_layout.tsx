import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '../src/context/CartContext';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Tabs screenOptions={{ 
          tabBarActiveTintColor: 'orange',
          headerShown: false
        }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Головна',
              tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="menu"
            options={{
              title: 'Меню',
              tabBarIcon: ({ color }) => <Ionicons name="pizza-outline" size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="cart"
            options={{
              href: null, 
            }}
          />
          <Tabs.Screen
            name="pizza/[id]"
            options={{
              href: null, 
              headerShown: false,
              tabBarStyle: { display: 'none' }
            }}
          />
        </Tabs>
      </CartProvider>
    </QueryClientProvider>
  );
}