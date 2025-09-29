import { Text, View } from 'react-native';
import { stylesComp, divider } from './styles'

export const viewComp = () => {
  return (
    <>
      <View style={{
        backgroundColor: '#a5e32bff'
      }}>
        <Text style={stylesComp.title}>View</Text>

        <Text style={stylesComp.text}>
          Uma view representa um container qualquer que agrupa elementos.
          Este texto está dentro de um container com a cor de fundo alterada.
          O view é parecido com o "div" do html
        </Text>
      </View>
      {divider()}
    </>
  );
}