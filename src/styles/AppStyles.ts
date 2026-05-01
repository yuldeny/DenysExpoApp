import { StyleSheet } from 'react-native';

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: '900',
  },
  imgContainer: {
    flexDirection: 'column',
  },
  orderBtn: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    paddingVertical: 12,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  orderBtnText: {
    textAlign: 'center',
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 15,
    height: 46,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
  searchResults: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
  },
  searchItem: {
    fontSize: 14,
    paddingVertical: 4,
    color: "#333",
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 250,
    width: '100%',
  },
  emptyTitle: {
    fontSize: 18,
    color: '#888',
    fontWeight: 'bold',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 10,
  },
  clearButton: {
    padding: 4,
    marginRight: 4,
    marginLeft: 5,
  },
  detailsContainer: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  detailsBackBtn: { 
    padding: 15, 
    position: 'absolute', 
    top: 40, 
    zIndex: 1 
  },
  detailsImage: { 
    width: '100%', 
    height: 300, 
    resizeMode: 'contain', 
    marginTop: 80 
  },
  detailsInfoContainer: { 
    padding: 20, 
    flex: 1, 
    marginTop: 20 
  },
  detailsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 50 
  },
  detailsTitle: { 
    fontSize: 26, 
    fontWeight: 'bold' 
  },
  detailsPrice: { 
    fontSize: 22, 
    color: 'orange', 
    marginTop: 5, 
    fontWeight: 'bold' 
  },
  detailsAddBtn: { 
    backgroundColor: 'orange', 
    padding: 18, 
    borderRadius: 15, 
    alignItems: 'center' 
  },
  detailsAddBtnText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
});