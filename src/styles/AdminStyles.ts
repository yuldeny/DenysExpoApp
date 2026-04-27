import { StyleSheet } from 'react-native';

export const adminStyles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 80,
    alignItems: 'center',
    paddingBottom: 50
  },
  pageTitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  card: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  pizzaName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    gap: 10
  },
  btnDiscount: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  btnUpdate: {
    backgroundColor: '#ffbb33',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  btnDelete: {
    backgroundColor: '#ff4444',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  btnTextWhite: {
    color: 'white',
    fontWeight: 'bold'
  },
  btnTextBlack: {
    color: 'black',
    fontWeight: 'bold'
  }
});