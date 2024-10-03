export type RootStackParamList = {
    Tabs: undefined;  
    Home: { newTask?: { id: number; title: string; description: string; status: boolean; date: string } };
    AddTask: undefined; 
  };