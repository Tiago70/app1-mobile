import { Text, View } from "react-native";
import { stylesComp, divider } from "./styles";

export const safeAreaViewComp = () => {
    return(
        <View>
            <Text style={stylesComp.title}>Safe Area View</Text>
            <Text style={stylesComp.text}>
                Garante que os componentes não fiquem sobre a "área 
                do sistema", que são como aquelas câmeras e barras 
                que ficam sobre a tela. Elas são indicadas principalmente 
                para usuários de iphone. Este componente parece com uma 
                View então não há muito de novo. {'\n'}
                Detalhe que esta tela inteira está sobre uma SafeAreaView.
            </Text>
            {divider()}
        </View>
    );
}