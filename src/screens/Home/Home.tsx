import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { Task } from "../../components/Task";
import { SearchInput } from "../../components/SearchInput";
import { useRoute, useIsFocused, RouteProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  Home: { newTask?: { id: number; title: string; description: string; date: string; status: boolean } };
  AddTask: undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type TaskType = {
  id: number;
  title: string;
  description: string;
  status: boolean;
  date: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const route = useRoute<HomeScreenRouteProp>()
  const isFocused = useIsFocused();
  const [inputText, setInputText] = useState("");

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    }
  };

  // Salva as tarefas no AsyncStorage
  const saveTasks = async (tasksToSave: TaskType[]) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasksToSave));
    } catch (error) {
      console.error("Erro ao salvar tarefas:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (isFocused && route.params?.newTask) {
      const newTask = {
        ...route.params.newTask,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasks(updatedTasks); 
    }
  }, [isFocused, route.params?.newTask]);

  const handleToggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks); 
  };

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks); 
  };

  function handleSearchTask() {
    const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setTasks(filteredTasks);
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
              date={item.date} // Agora date é uma string
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
