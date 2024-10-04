import styled from "styled-components/native";

export const InputContainer = styled.View`
    flex-direction: row;
    width: 100%;
    border-radius: 24px;
    background-color: #fff;
    align-items: center;
    padding-horizontal: 8px;
    overflow: hidden;
`;

export const SearchTextInput = styled.TextInput`
    flex: 1;
    padding: 8px;
    border-radius: 4px;
    color: #505050;
`;

export const SearchInputButton = styled.TouchableOpacity`
    height: 100%;
    padding: 8px;
`;