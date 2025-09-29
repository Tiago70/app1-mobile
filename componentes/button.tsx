import { View, Button, Alert, StyleSheet, Text } from 'react-native';
import { stylesComp, divider } from './styles';

export const buttonComp = () => {
    const mostrarAlerta = () => {
        Alert.alert(
            'Isso é um alert!', 
            'O botão foi pressionado com sucesso e emitimos o alerta.', 
            [{ text: 'Valeu' }]
        );
    };

    return (
        <View>
            <Text style={stylesComp.title}>Button e Alert</Text>
            <Text style={stylesComp.text}>
                Um botão que aciona alguma ação quando é precionado. 
                Este botão é um botão padrão do sistema, portando não 
                é possível fazer muitas alterações nele. {'\n\n'}
                
                O botão está sendo usado junto com o Alert, o Alert é 
                como se fosse um pop-up que aparerá na tela roubando 
                toda a atenção e mostrando uma mensagem ao usuário. {'\n'}
            </Text>
            <Button
                title="Pressione-me"
                onPress={mostrarAlerta}
                color="#22bc9dff" // Cor do botão (no Android)
            />
            {divider()}
        </View>
    );
}
