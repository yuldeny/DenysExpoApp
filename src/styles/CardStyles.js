import { StyleSheet } from 'react-native';

export const CardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    paddingRight: 8,
  },
  heartBtn: {
    backgroundColor: '#ebca8d',
    borderRadius: 8,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.58,
  },
  heartText: {
    fontSize: 18,
    color: '#f0420d',
  },
  description: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 8,
    paddingRight: 8,
  },
  weight: {
    alignSelf: 'flex-start',
    backgroundColor: '#ebca8d',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 10,
    opacity: 0.58,
  },
  weightText: {
    fontSize: 12,
    color: '#f0420d',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
  plusBtn: {
    backgroundColor: '#ebca8d',
    borderRadius: 8,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.58,
  },
  plusText: {
    fontSize: 20,
    color: '#f0420d',
    fontWeight: '600',
  },
});