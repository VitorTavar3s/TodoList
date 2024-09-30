import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Text } from "react-native";
import {
  Container,
  TaskDone,
  TaskDelete,
  TaskInfo,
  TaskDate,
  TaskText,
} from "./styles";
import { View, StyleSheet} from "react-native";

type Props = {
  title: string;
  description: string;
  status: boolean;
  date: Date;
  onCheck?: () => void;
  onRemove?: () => void;
};

export function Task({
  title,
  description,
  status,
  date,
  onCheck,
  onRemove,
}: Props) {
  return (
    <Container>
      <TaskDone
        onPress={onCheck}
        style={status ? { backgroundColor: "#FFFFFF" } : {}}
      >
        {!status && <Entypo name="circle" size={26} />}
        {status && <AntDesign name="checkcircle" size={26} color={"#9A5CD0"} />}
      </TaskDone>
      <TaskInfo>
        <TaskText
          style={[
            { fontSize: 22 },
            status ? { textDecorationLine: "line-through", color: "#9A5CD0" } : {},
          ]}
        >
          {title}
        </TaskText>
        <View style={styles.divider} />
        <TaskText>{description}</TaskText>
        <TaskDate>{date.toLocaleDateString()}</TaskDate>
      </TaskInfo>

      <TaskDelete onPress={onRemove}>
        <Feather name="trash-2" size={24} color={"#ff4d4d"} />
      </TaskDelete>
    </Container>
  );
}


const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginVertical: 6,
  },
});