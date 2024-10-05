import { View } from "react-native";
import { AddTaskButtonContainer, AddTaskButtonText, BackContainer, HeaderContainer, HeaderSubTitle, HeaderTitle, IconButton, PageText } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
}

export function Header({ navigation }: Props) {
    const actualDate = new Date();
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const headerDate = `${weekDays[actualDate.getDay()]}, ${actualDate.getDate()} ${months[actualDate.getMonth()]} ${actualDate.getFullYear()}`;
    return (
        <View>
            {navigation.getState().index == 1 &&
                <HeaderContainer>
                    <View>
                        <HeaderTitle>To Do List</HeaderTitle>
                        <HeaderSubTitle>{headerDate}</HeaderSubTitle>
                        <BackContainer>
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
                <HeaderContainer>
                    <View>
                        <HeaderTitle>To Do List</HeaderTitle>
                        <HeaderSubTitle>{headerDate}</HeaderSubTitle>
                        <BackContainer>
                            <IconButton onPress={() => navigation.pop()}>
                                <AntDesign name="left" size={20} color="white" />
                            </IconButton>
                        </BackContainer>
                    </View>
                    <View style={{height: '100%', flexDirection: 'column', justifyContent:'flex-end'}}>
                        <PageText>New Task</PageText>
                    </View>
                </HeaderContainer>
            }
        </View>
    );
}