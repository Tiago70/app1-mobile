import {
  viewComp, textComp, textInputComp, buttonComp,
  imageComp, modalComp, activityComp, flatListComp,
  safeAreaViewComp, scrollViewComp, statusBarComp,
  sectionListComp, switchComp, touchComp
} from './componentes';
import { Text, View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { stylesComp } from './componentes/styles';


export default function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[
          viewComp(),
          textComp(),
          textInputComp(),
          imageComp(),
          buttonComp(),
          modalComp(),
          activityComp(),
          safeAreaViewComp(),
          scrollViewComp(),
          statusBarComp(),
          switchComp(),
          touchComp(),
          flatListComp(),
          sectionListComp(),
        ]}
        <Text style={stylesComp.title}> Detalhes importantes</Text>
        <Text style={stylesComp.text}>
          O flatList e sectionList não devem ser usados dentro de uma scrollView, 
          pois as listas já possuem uma área de scroll, usar as duas uma dentro da 
          outra pode causar bugs. Neste caso eu usei e fui errado {'\n\n'}
          
          Por fim, o SafeAreaView será descontinuado.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container:{
    paddingTop: 50, paddingLeft: 20, paddingRight: 20, paddingBottom: 50
  }
});