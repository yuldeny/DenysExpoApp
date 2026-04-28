import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
  },
  btn: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});