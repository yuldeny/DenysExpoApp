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
});