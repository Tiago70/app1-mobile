import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { stylesComp, divider } from './styles';

export const touchComp = () => {
    const onPressBotao = () => Alert.alert('Botão customizado clicado!');

    return (
        <View>
            <Text style={stylesComp.title}>Touchable Opacity</Text>
            <Text style={stylesComp.text}>
                Este é um de container especial, onde tudo que estiver dentro
                dele é considerado tocável, ou seja, você pode fazer qualquer
                tipo de botão, é últil quando você quer fazer botões totalmente
                customizaveis ou deixar qualquer outra coisa com evento de toque. {'\n'}
                Exemplo de um botão customizado: {'\n'}
            </Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.botao} onPress={onPressBotao}>
                    <Text style={styles.textoBotao}>Clique Aqui</Text>
                </TouchableOpacity>
            </View>
            {divider()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    botao: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});