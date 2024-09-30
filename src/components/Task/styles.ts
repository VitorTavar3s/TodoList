import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: top;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const TaskText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const TaskDone = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const TaskDelete = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const Divider = styled.View`
    borderBottomWidth: 1px,
    borderBottomColor: '#ccc',
    marginVertical: 8px,
`;

export const TaskInfo = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const TaskDate = styled.Text`
  font-size: 12px;
  color: #666;
`;
