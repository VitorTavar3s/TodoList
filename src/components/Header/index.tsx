import { View } from "react-native";
import { AddTaskButtonContainer, AddTaskButtonText, BackContainer, HeaderContainer, HeaderSubTitle, HeaderTitle, IconButton, PageText } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
}

export function Header ({navigation}:Props){
    return(
        <HeaderContainer style={navigation.canGoBack()?{height: 180, flexDirection: "column", alignItems:"flex-start"}:{}}>
            <View>
                <HeaderTitle>To Do List</HeaderTitle>
                <HeaderSubTitle>Week day, 1 Month</HeaderSubTitle>
            </View>
            {!navigation.canGoBack() &&
            <AddTaskButtonContainer onPress={() => navigation.navigate('AddTask')}>
                <AntDesign name="plus" size={20} color="white" />
                <AddTaskButtonText>Add Task</AddTaskButtonText>
            </AddTaskButtonContainer>
            }
            {navigation.canGoBack() &&
            <BackContainer >
                <IconButton onPress={() => navigation.pop()}>
                    <AntDesign name="left" size={20} color="white" />
                </IconButton>
                <PageText>New Task</PageText>
            </BackContainer>
            }

        </HeaderContainer>
    );
}