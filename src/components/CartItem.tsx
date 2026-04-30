import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CartItemStyles as styles } from '../styles/CartItemStyles';

interface CartItemProps {
  text: string;
  img: string;
  price: number;
  onRemove: () => void;
}

export const CartItem = ({ text, img, price, onRemove }: CartItemProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: img }} style={styles.image} />
      
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.name}>{text}</Text>
          <TouchableOpacity style={styles.deleteBtn} onPress={onRemove}>
            <Text style={styles.deleteText}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.price}>{price} ₴</Text>
        </View>
      </View>
    </View>
  );
};