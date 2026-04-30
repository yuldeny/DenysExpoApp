import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CardStyles as styles } from '../styles/CardStyles';

interface CardItemProps {
  text: string;
  img: string;
  price: number;
  weight: string;
  description: string;
  onAddToCart: () => void;
}

export const CardItem = ({ text, img, price, weight, description, onAddToCart }: CardItemProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: img }} style={styles.image} />
      
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>{text}</Text>
          <TouchableOpacity style={styles.heartBtn}>
            <Text style={styles.heartText}>♡</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>

        <View style={styles.weight}>
          <Text style={styles.weightText}>{weight}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.price}>{price} ₴</Text>
          
          <TouchableOpacity style={styles.plusBtn} onPress={onAddToCart}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};