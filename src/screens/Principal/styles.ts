import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   background-color:#FFFFFF;
   padding:16px;
   padding-top:64px;
   gap:16px;
   justify-content: flex-center;
   align-items: center;
   flex-direction: column;
   width:100%

`;

export const ContainerLogo = styled.View`
   flex: 0.6;
   justify-content: center;
   width:100%
   align-items: center;
   padding-top: 64px;
`;

export const ContainerButton = styled.View`
   flex: 0.2;
   justify-content: center;
   width:100%
   align-items: center;

`;

export const TextPrincipal = styled.Text`
    color: #000;
    font-size: 22px;
    font-weight: 400;
    padding-top:24px;

    
`;
export const TextButton = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
`;

export const ButtonStarted = styled.TouchableOpacity`
    width: 100%;
    max-width: 310px;
    height: 56px;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    background-color:#0E9577;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 16px;
`;