import { ButtonStarted, Container, TextPrincipal, TextButton, ContainerLogo, ContainerButton } from "./styles";
import { Image, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default function Principal() {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <Container>
            <ContainerLogo>
                <Image
                    source={require('../../../assets/toDoListLogo.png')}
                    style={styles.imageStyle}
                />
                <TextPrincipal>Welcome to To Do List App</TextPrincipal>
            </ContainerLogo>
            <ContainerButton>

                <ButtonStarted  onPress={() => navigation.navigate('Tabs')}>
                    <TextButton >Get Started</TextButton>
                </ButtonStarted>
            </ContainerButton>
        </Container>
    );
}


const styles = StyleSheet.create({
    imageStyle: {
        maxWidth: 285,
        height: 218,
    }
});