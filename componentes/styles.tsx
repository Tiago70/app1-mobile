import { StyleSheet, View } from 'react-native';

export const stylesComp = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 600
  },
  text: {
    fontSize: 16
  }
});

export const divider = () => {
  return <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 20}}></View>;
}