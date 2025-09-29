import { stylesComp, divider } from "./styles";
import { Text, View, ActivityIndicator } from "react-native";

export const activityComp = () => {
    return (
        <View>
            <Text style={stylesComp.title}>Activity Indicator</Text>
            <Text style={stylesComp.text}>
                Serve para indicar que algo está carregando, este é um 
                componente padão do sistema {'\n'}
            </Text>
            <ActivityIndicator size='large' color='#22bc9dff'/>
            {divider()}
        </View>
    );
}