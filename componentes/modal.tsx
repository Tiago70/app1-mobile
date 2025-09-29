import { Modal, Alert, View, StyleSheet, Text, Button, Pressable } from "react-native";
import { stylesComp, divider } from "./styles";
import { useState } from "react";

export const modalComp = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Isso é um Modal!</Text>
                        <Button title="Fechar Modal" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
            <Text style={stylesComp.title}>Modal</Text>
            <Text style={stylesComp.text}>
                É muito parecido com o alert, porem voce pode colocar o que 
                quiser dentro de um modal, como formulário, imagens, botões etc. {'\n'}
                </Text>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={[stylesComp.text, {color: '#fff', textAlign:'center'}]}>Mostrar Modal</Text>
            </Pressable>
            {divider()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: { fontSize: 18, marginBottom: 15 },
    button: {
        borderRadius: 2,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#22bc9dff',
    },
});
