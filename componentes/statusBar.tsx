import { StatusBar, Text, StyleSheet, View, Button } from 'react-native';
import { divider, stylesComp } from './styles';
import { useState } from 'react';

export const statusBarComp = () => {
    const [estado, setEstado] = useState(false);

    const alterar = () => {
        setEstado(!estado);
    };
    return (
        <View>
            <Text style={stylesComp.title}>Status Bar</Text>
            <Text style={stylesComp.text}>
                Este componente serve para altar a barra de status do
                celular, clique no botão abaixo uma vez para vê-la em ação.{'\n'}
                Detalhe que irá mudar a cor da barra apenas em android {'\n'}
            </Text>
            <StatusBar
                barStyle={estado ? 'dark-content' : 'light-content'}
                backgroundColor={estado ? '#eeeb95ff' : '#6a51ae'}
            />
            <Button
                title='Aperte'
                onPress={alterar}
                color={'#22bc9dff'}
            />
            {divider()}
        </View>
    );
}

const styles = StyleSheet.create({
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { color: 'white', fontSize: 18 },
});