import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Task } from "../../components/Task";
import { SearchInput } from "../../components/SearchInput";
import { TasksContext } from "../../context/tasksContext";
import { TaskProps } from "../../utils/types";

export default function ClosedTasks() {

  const {tasks, setTasks} = useContext(TasksContext);
  const [localTasksList, setLocalTasksList] = useState<TaskProps[]>([]);
  const [inputText, setInputText] = useState("");

  const handleToggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    handleShowLocalListTasks();
  };

  function handleSearchTask() {
    const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setLocalTasksList(filteredTasks);
  };

  function handleShowLocalListTasks(){
    const filteredTasks = tasks.filter(task => !task.archived && task.status);
    setLocalTasksList(filteredTasks)
  }

  useEffect(() => {
    handleShowLocalListTasks()
  }, [tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <SearchInput onPress={handleSearchTask} onChangeText={setInputText} value={inputText} />
        <FlatList
          style={styles.listTask}
          data={localTasksList}
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
          ListEmptyComponent={() => (
            <View>
              <Text style={{textAlign: 'center', fontWeight: 600}}>There are no closed tasks</Text>
            </View>
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
