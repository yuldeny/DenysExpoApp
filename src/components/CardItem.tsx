import React from 'react';
import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import { CardStyles as styles } from '../styles/CardStyles';
import { Ionicons } from '@expo/vector-icons';

export interface CardItemProps {
  text: string;
  img: string;
  price: number;
  weight: string;
  description: string;
}

export const CardItem = ({ text, img, price, weight, description }: CardItemProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: img }} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.name}>{text}</Text>
          <TouchableOpacity style={styles.heartBtn}>
            <Text style={styles.heartText}><Ionicons name="heart-outline" size={18} color="orange" /></Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.weight}>
          <Text style={styles.weightText}>{weight}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{price} ₴</Text>
          <TouchableOpacity style={styles.plusBtn} onPress={() => Alert.alert("Піцу додано в кошик", text)}>
            <Text style={styles.plusText}><Ionicons name="add" size={18} color="orange" /></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

