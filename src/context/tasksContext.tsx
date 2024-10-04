import { createContext, ReactNode, useEffect, useState } from "react";
import { TaskProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TasksContextProps {
    tasks: TaskProps[];
    setTasks: ([]: TaskProps[]) => void;
}

interface TasksProviderProps {
    children: ReactNode;
}

export const TasksContext = createContext<TasksContextProps>(
    {
        tasks: [],
        setTasks: ([]: TaskProps[]) => {}
    }
);

function TasksProvider({children}: TasksProviderProps){

    const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);

    async function loadTasks(){
        try {
            const storedTasks = await AsyncStorage.getItem("@tasks");
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error("Erro ao carregar tarefas:", error);
        }
    };
    
    // Salva as tarefas no AsyncStorage
    async function saveTasks(){
        try {
            await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
        } catch (error) {
            console.error("Erro ao salvar tarefas:", error);
        }
    };
    
    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
        saveTasks()
    }, [tasks]);
    
    return(
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;