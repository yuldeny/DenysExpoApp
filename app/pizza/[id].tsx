import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { AppStyles as styles } from '../../src/styles/AppStyles';

export default function PizzaDetailsScreen() {
  const router = useRouter();
  const { name, price, image } = useLocalSearchParams();
  const [isFav, setIsFav] = useState(false);

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <TouchableOpacity style={styles.detailsBackBtn} 
      onPress={() => router.navigate('/menu')}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Image 
        source={{ uri: image as string }} 
        style={styles.detailsImage} 
      />

      <View style={styles.detailsInfoContainer}>
        <View style={styles.detailsRow}>
          <View>
            <Text style={styles.detailsTitle}>{name}</Text>
            <Text style={styles.detailsPrice}>{price} грн</Text>
          </View>

          <TouchableOpacity onPress={() => setIsFav(!isFav)}>
            <Ionicons 
              name={isFav ? "heart" : "heart-outline"} 
              size={35} 
              color={isFav ? "red" : "black"} 
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.detailsAddBtn} onPress={() => alert('Піцу додано!')}>
          <Text style={styles.detailsAddBtnText}>Додати в корзину</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}