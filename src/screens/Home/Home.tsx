import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "../../components/Task";
import { AddTask } from "../AddTask";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição 1",
      status: false,
      date: new Date(),
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição 2",
      status: true,
      date: new Date(),
    },
  ]);

  const Stack = createStackNavigator();

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>To Do List</Text>
          <Text style={styles.subTitle}>Week day, 1 Month</Text>
        </View>
        <TouchableOpacity style={styles.addTaskButton}>
          <AntDesign name="plus" size={20} color="white" />
          <Text style={styles.addTaskButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.listTask}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            description={item.description}
            status={item.status}
            date={item.date}
            onCheck={() => handleToggleComplete(item.id)}
            onRemove={() => handleDelete(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#6C0BA9",
    marginBottom: 16,
    width: "100%",
    paddingTop: 40,
    paddingBottom:18,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 16
  },
  subTitle: {
    color: "#EEE",
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 16
  },
  addTaskButton: {
    backgroundColor: "#0E9577",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginRight: 16
  },
  addTaskButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
  listTask: {
    paddingHorizontal: 16,
  },
});
