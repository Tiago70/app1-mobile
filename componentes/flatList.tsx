import { FlatList, Text, View, StyleSheet } from 'react-native';
import { stylesComp, divider } from './styles';

const DADOS = [
  { id: '1', titulo: 'Primeiro Item' },
  { id: '2', titulo: 'Segundo Item' },
  { id: '3', titulo: 'Terceiro Item' },
  { id: '4', titulo: 'Quarto Item' },
  { id: '5', titulo: 'Quinto Item' },
];

type ItemProps = {titulo: string};

const Item = ({ titulo }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.titulo}>{titulo}</Text>
  </View>
);

export const flatListComp = () => {
  return (
    <View>
        <Text style={stylesComp.title}>Flat List</Text>
        <Text style={stylesComp.text}>
            Fuciona como uma lista de alta perfomance, ela é 
            feita para quando você tem muitos itens. Ela também 
            renderiza apenas aquilo que está aparecendo na tela, 
            por isso a alta perfomance. {'\n'}
            Exemplo: {'\n'}
        </Text>
      <FlatList
        data={DADOS}
        renderItem={({ item }) => <Item titulo={item.titulo} />}
        keyExtractor={item => item.id}
      />
     {divider()}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#22bc9dff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 2
  },
  titulo: { fontSize: 24 , color: '#ffffff'},
});