import { SectionList, Text, View, StyleSheet } from 'react-native';
import { stylesComp, divider } from './styles';

const DADOS = [
    {
        title: 'Pratos Principais',
        data: ['Pizza', 'Hambúrguer', 'Risoto'],
    },
    {
        title: 'Sobremesas',
        data: ['Sorvete', 'Bolo', 'Pudim'],
    },
];

export const sectionListComp = () => {
    return (
        <View>
            <Text style={stylesComp.title}>Section List</Text>
            <Text style={stylesComp.text}>
                É parecido com a Flat List, porém aqui podemos
                separar os ítens das lispas por sessões/categorias. {'\n'}
                Este exemplo mostra uma lista com categoria de pratos: {'\n'}
            </Text>
            <SectionList
                sections={DADOS}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.titulo}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.cabecalho}>{title}</Text>
                )}
            />
            {divider()}
        </View>
    );
}

const styles = StyleSheet.create({
    item: { backgroundColor: '#f9c2ff', padding: 20, marginVertical: 8 },
    cabecalho: { fontSize: 24, backgroundColor: '#fff' },
    titulo: { fontSize: 16 },
});