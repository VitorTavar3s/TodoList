import { View } from "react-native";
import { AddTaskButtonContainer, AddTaskButtonText, BackContainer, HeaderContainer, HeaderSubTitle, HeaderTitle, IconButton, PageText } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
}

export function Header({ navigation }: Props) {
    return (
        <View>
            {navigation.getState().index == 1 &&
                <HeaderContainer>
                    <View>
                        <HeaderTitle>To Do List</HeaderTitle>
                        <HeaderSubTitle>Week day, 1 Month</HeaderSubTitle>
                        <BackContainer >
                            <IconButton onPress={() => navigation.pop()}>
                                <AntDesign name="left" size={20} color="white" />
                            </IconButton>
                        </BackContainer>
                    </View>
                    <AddTaskButtonContainer onPress={() => navigation.navigate('AddTask')}>
                        <AntDesign name="plus" size={20} color="white" />
                        <AddTaskButtonText>Add Task</AddTaskButtonText>
                    </AddTaskButtonContainer>

                </HeaderContainer>
            }
            {navigation.getState().index == 2 &&
                <HeaderContainer style={{ height: 180, flexDirection: "column", alignItems: "flex-start" }}>
                    <View>
                        <HeaderTitle>To Do List</HeaderTitle>
                        <HeaderSubTitle>Week day, 1 Month</HeaderSubTitle>
                    </View>
                    <BackContainer >
                        <IconButton onPress={() => navigation.pop()}>
                            <AntDesign name="left" size={20} color="white" />
                        </IconButton>
                        <PageText>New Task</PageText>
                    </BackContainer>
                </HeaderContainer>
            }
        </View>
    );
}