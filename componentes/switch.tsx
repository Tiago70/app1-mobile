import { useState } from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';
import { stylesComp, divider } from './styles';

export const switchComp = () => {
    const [estaAtivado, setEstaAtivado] = useState(false);
    const mudarSwitch = () => setEstaAtivado(!estaAtivado);

    return (
        <View>
            <View>
                <Text style={stylesComp.title}>Switch</Text>
                <Text style={stylesComp.text}>
                    Funciona como um interruptor, ele pode ter apenas dois
                    valores, ligado e desligado, Ideal para operações que
                    precisam apenas de dois estados. {'\n'}
                </Text>
                <View style={styles.container}>

                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={estaAtivado ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={mudarSwitch}
                        value={estaAtivado}
                    />
                </View>
            </View>
            <Text style={styles.status}>
                O botão está: {estaAtivado ? 'Ligado' : 'Desligado'}.
            </Text>
            {divider()}
        </View>
    );
}

const styles = StyleSheet.create({
    status: { 
        marginTop: 20, 
        fontSize: 16, 
        fontWeight: 'bold'
    },
    container:{
        flex: 1,
        alignItems: 'flex-start'
    }
});