import { Text, View, ScrollView, StyleSheet } from "react-native";
import { stylesComp, divider } from "./styles";

export const scrollViewComp = () => {
    return (
        <View>
            <Text style={stylesComp.title}>Scroll View</Text>
            <Text style={stylesComp.text}>
                Este componente funciona como um container generico,
                com uma única peculiaridade: ativa um scroll quando
                a quantidade de conteudo ultrapassa o tamanho da tela.
                É útil para criar áreas de Scroll.
                Detalhe que toda a área deste app também está dentro
                de um scroll. {'\n'}
                Exemplo de um scroll horizontal: {'\n'}
            </Text>
            <ScrollView horizontal>
                <View style={estilo.container}></View>
                <View style={estilo.container}></View>
                <View style={estilo.container}></View>
                <View style={estilo.container}></View>
                <View style={estilo.container}></View>
                <View style={estilo.container}></View>
            </ScrollView>
            {divider()}
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#22bc9dff',
        width: 100,
        height: 100,
        marginRight: 30
    }
});