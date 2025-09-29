import { stylesComp, divider } from "./styles";
import { Text, Image, View } from "react-native";

export const imageComp = () => {
    return (
        <View>
            <Text style={stylesComp.title}>Image</Text>
            <Text style={stylesComp.text}>
                Uma tag para colocar imagens, semelhante ao "img" do html {'\n'}

                Exemplo: {'\n'}
            </Text>
            <Image  
                style={{
                    width:200, height:400,
                }}
                source={{
                    uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFbGUqu_PEUVyfSiKZMPeM640C_-LpEdFWw&s'
                }}
            />
            {divider()}
        </View>
    );
}