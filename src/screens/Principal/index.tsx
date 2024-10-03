import { ButtonStarted, Container, TextPrincipal, TextButton, ContainerLogo, ContainerButton } from "./styles";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/types";

type Props = NativeStackScreenProps<RootStackParamList>;


export default function Principal() {
    const navigation = useNavigation<Props['navigation']>();

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

                <ButtonStarted  onPress={() => navigation.navigate('Home')}>
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