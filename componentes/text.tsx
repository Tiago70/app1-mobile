import { stylesComp, divider } from './styles'
import { Text } from 'react-native'

export const textComp = () => {
    return(
        <>
            <Text style={stylesComp.title}>Text</Text>
            <Text style={stylesComp.text}>
                O campo Text é onde todo os textos irão ficar, ele é como um container 
                que só armazena texto, muito parecido com o "p" do html
            </Text>
            {divider()}
        </>
    );
}