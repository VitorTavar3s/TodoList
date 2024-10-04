import styled from "styled-components/native";

export const TabLabelContainer = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 8px 0px;
    border-bottom-width: 1px;
    border-bottom-color: #9A5CD0;
`;

export const TabLabelText = styled.Text`
    color: #000000;
    font-size: 16px;
    font-weight: 500;
`;

export const TabLabelCountContainer = styled.View`
    height: 20px;
    background-color: #000000;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
`;

export const TabLabelCountText = styled.Text`
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    margin: 0px 8px;
`;