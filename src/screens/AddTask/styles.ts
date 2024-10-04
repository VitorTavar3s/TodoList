import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f4f4f4;
`;

export const FormContainer = styled.View`
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #ccc;
  margin: 16px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  padding: 10px 0;
  margin-bottom: 16px;
  font-size: 16px;
  color: #333;
`;

export const DateTimeRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DateTimeButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 8px;
`;

export const DateTimeText = styled.Text`
  font-size: 16px;
  color: #555;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #0E9577;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  margin-bottom: 16px;
  margin-horizontal: 16px;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #B91C1C;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  margin-horizontal: 16px;
`;

export const CancelButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
