import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  TaskDone,
  TaskDelete,
  TaskInfo,
  TaskDate,
  TaskText,
} from "./styles";
import { View, StyleSheet } from "react-native";

type Props = {
  title: string;
  description: string;
  status: boolean;
  date: string;
  archived?: boolean; 
  onCheck?: () => void;
  onRemove?: () => void;
  onArchive?: () => void;
};

export function Task({
  title,
  description,
  status,
  date,
  archived,
  onCheck,
  onRemove,
  onArchive,
}: Props) {

  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <Container  style={[
      { backgroundColor: "#FFFFFF" }, // Cor padrão
      archived ? { backgroundColor: "#d3d3d3" } : {}, // Se estiver arquivada, fica cinza
    ]}>
      <TaskDone
        onPress={onCheck}
        //style={status ? { backgroundColor: "#FFFFFF" } : {}}
        disabled={archived} // Desabilitado se a tarefa estiver arquivada
        style={archived ? { opacity: 0.5 } : {}} // Visualmente desabilitado
        
      >
        {!status && <Entypo name="circle" size={26} />}
        {status && <AntDesign name="checkcircle" size={26} color={"#9A5CD0"} />}
      </TaskDone>
      <TaskInfo style={archived ? { opacity: 0.5 } : {}}>
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
        <TaskDate>{formattedDate}</TaskDate>
      </TaskInfo>

      <TaskDelete 
        onPress={onRemove}  disabled={archived} 
        style={archived ? { opacity: 0.5 } : {}} >
        <Feather name="trash-2" size={24} color={"#ff4d4d"} />
      </TaskDelete>
      <TouchableOpacity onPress={onArchive}>
        {!archived && <Feather name="archive" size={24} color="blue" />}
        {archived && <Feather name="corner-right-up" size={24} color="blue" />}
      </TouchableOpacity>
   

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