import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    background-color: #6C0BA9;
    height: 140px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 45px;
    padding-bottom: 18px;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    padding-left: 16px;
`;

export const HeaderSubTitle = styled.Text`
    color: #EEE;
    font-size: 16px;
    margin-vertical: 5px;
    padding-left: 16px;
`;

export const AddTaskButtonContainer = styled.TouchableOpacity`
    background-color: #0E9577;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 16px;
    margin-right: 16px;
`;

export const AddTaskButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    margin-left: 8px;
    font-weight: bold;
`;

export const IconButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
`;

export const PageText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    margin-right: 16px;
    margin-bottom: 2px;
`;

export const BackContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-horizontal: 16px;
    align-items: center;
`;