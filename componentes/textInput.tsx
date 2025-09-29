import React, { useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { stylesComp, divider } from './styles'

export const textInputComp = () => {
    const [nome, setNome] = useState('');

    return (
        <View>
            <Text style={stylesComp.title}>Text Input</Text>
            <Text style={stylesComp.text}>
                Um campo para entrada de dados do tipo texto, 
                é possivel adicionar eventos para acionar quando 
                o usuário digital algo {'\n'}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite algo"
                onChangeText={setNome} // Atualiza o estado 'nome' a cada letra digitada
                value={nome}
            />
            <Text style={styles.resultado}>Você digitou: {nome}</Text>
            {divider()}
        </View>
    );
}

const styles = StyleSheet.create({
  label: { fontSize: 18, marginBottom: 8 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  resultado: { marginTop: 16, fontSize: 16 },
});