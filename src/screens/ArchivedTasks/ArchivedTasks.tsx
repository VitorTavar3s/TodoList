import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { Task } from "../../components/Task";
import { SearchInput } from "../../components/SearchInput";

export default function ArchivedTasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição 1",
      status: true,
      date: "19/02/2024",
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição 2",
      status: true,
      date: "19/02/2024",
    },
  ]);

  const [inputText, setInputText] = useState("");

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

  function handleSearchTask(){
    //buscar tarefas com o nome salvo no hook inputText
    console.log("funcao ainda nao implementada kkkkk")
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <SearchInput onPress={handleSearchTask} onChangeText={setInputText} value={inputText} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  listTask: {
    gap: 20,
  },
  body: {
    gap: 20,
    padding: 20,
  }
});
